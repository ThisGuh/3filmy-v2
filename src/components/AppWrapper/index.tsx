import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';

type StyledProps = {
  isBurger: boolean;
};

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div<StyledProps>`
  overflow: ${({ isBurger }) => (!isBurger ? 'hidden' : null)};
  height: ${({ isBurger }) => (!isBurger ? '100vh' : null)};
  display: grid;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 1fr 5.5fr 1fr;
    height: inherit;
  }
`;

function AppWrapper({ children }: Props) {
  const isBurger = useSelector((state: RootState) => state.isBurger);

  return <Wrapper isBurger={isBurger}>{children}</Wrapper>;
}

export default AppWrapper;
