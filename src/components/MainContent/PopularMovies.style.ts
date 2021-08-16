import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

export const Movies = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media ${({ theme }) => theme.screenSizes.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.screenSizes.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${({ theme }) => theme.screenSizes.xxl} {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const MovieImageWrapper = styled.div`
  width: 120px;
  height: 200px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
`;

export const SectionTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  padding: 0 20px;
`;
