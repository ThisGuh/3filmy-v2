import styled from 'styled-components';
import Image from 'next/image';

export const MOVIE_IMAGE_WIDTH = 120;
export const MOVIE_IMAGE_HEIGHT = 200;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media screen and ${({ theme }) => theme.screenSizes.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and ${({ theme }) => theme.screenSizes.xxl} {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const MovieImageWrapper = styled.div`
  width: ${MOVIE_IMAGE_WIDTH}px;
  height: ${MOVIE_IMAGE_HEIGHT}px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  transition-duration: 0.3s;

  :hover {
    transform: scale(90%);
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
`;
