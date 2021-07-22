import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 1fr 5.5fr 1fr;
  }
`;

type Props = {
  children: React.ReactElement;
};

function AppWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default AppWrapper;
