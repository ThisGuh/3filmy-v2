import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { HiOutlineMenuAlt1 as BurgerIcon } from '@react-icons/all-files/hi/HiOutlineMenuAlt1';
import { RiCloseFill as CloseIcon } from '@react-icons/all-files/ri/RiCloseFill';
import { RootState } from 'state/reducers';
import { toggleBurger } from 'state/actions/burger.actions';

const stylesForIcons = css`
  fill: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};

  @media ${({ theme }) => theme.screenSizes.lg} {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

const StyledBurgerIcon = styled(BurgerIcon)`
  ${stylesForIcons}
`;

const StyledCloseIcon = styled(CloseIcon)`
  ${stylesForIcons}
`;

function Burger() {
  const isBurger = useSelector((state: RootState) => state.isBurger);
  const dispatch = useDispatch();

  return (
    <>
      {isBurger ? (
        <StyledBurgerIcon onClick={() => dispatch(toggleBurger())} />
      ) : (
        <StyledCloseIcon onClick={() => dispatch(toggleBurger())} />
      )}
    </>
  );
}

export default Burger;
