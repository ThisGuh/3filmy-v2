import styled from 'styled-components';

type Props = {
  burger: boolean;
};

const MenuHeaderHeight = '80px';
const NavWidth = '300px';
const animationDuration = '0.4s';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.header<Props>`
  height: ${MenuHeaderHeight};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition-duration: ${animationDuration};
  background-color: ${({ theme, burger }) =>
    !burger ? theme.colors.green : theme.colors.darkGray};

  > * {
    margin: 10px;
  }

  @media ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const Nav = styled.nav<Props>`
  height: calc(100vh - ${MenuHeaderHeight});
  background-color: ${({ theme }) => theme.colors.green};
  transition-duration: ${animationDuration};
  width: ${({ burger }) => (!burger ? '100%' : NavWidth)};
  transform: translateX(${({ burger }) => (!burger ? 0 : `-${NavWidth}`)});

  @media ${({ theme }) => theme.screenSizes.lg} {
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 100%;
    transform: translateX(0);
  }
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  width: 180px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  cursor: pointer;
  margin: 10px;

  @media ${({ theme }) => theme.screenSizes.lg} {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  svg {
    fill: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    @media ${({ theme }) => theme.screenSizes.lg} {
      fill: ${({ theme }) => theme.colors.green};
    }
  }
`;
