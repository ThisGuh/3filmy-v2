import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';
import Movies from 'components/Movies';
import { FiSearch as SearchIcon } from '@react-icons/all-files/fi/FiSearch';
import { toggleSearchModal } from 'state/actions/searchModal.actions';
import {
  searchMoviesInit,
  searchMoviesSuccess,
  searchMoviesError,
} from 'state/actions/searchMovies.actions';
import { RootState } from 'state/reducers';

const StyledSearchIcon = styled(SearchIcon)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0 20px 0 auto;
  cursor: pointer;
`;

const StyledInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Co chcesz obejrzeć?',
}))`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fontFamilies.default};
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 90%;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

function Search() {
  const dispatch = useDispatch();
  const { isSearchModal, searchMovies } = useSelector(
    (state: RootState) => state
  );

  const handleSearchMovie = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 1) {
      dispatch(searchMoviesInit());
      try {
        const { data } = await axios.post('/api/search/', {
          phrase: event.target.value,
        });
        dispatch(searchMoviesSuccess(data));
      } catch (error) {
        dispatch(searchMoviesError(error));
      }
    }
  };

  return (
    <>
      <StyledSearchIcon onClick={() => dispatch(toggleSearchModal())} />
      <Modal isOpen={isSearchModal} dispatchToggleAction={toggleSearchModal}>
        <StyledInput onChange={event => handleSearchMovie(event)} />
        <Movies moviesData={searchMovies} moviesAmount={11} />
      </Modal>
    </>
  );
}

export default Search;
