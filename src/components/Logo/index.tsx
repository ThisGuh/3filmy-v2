import styled from 'styled-components';
import Link from 'next/link';
import { RiMovie2Fill as MovieIcon } from '@react-icons/all-files/ri/RiMovie2Fill';
import { APP_NAME } from 'utils/constants';

type Props = {
  burger: boolean;
};

type StyledProps = {
  $burger: boolean;
};

const Wrapper = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ::after {
    content: '.';
    color: ${({ theme, $burger }) =>
      !$burger ? theme.colors.darkGray : theme.colors.green};

    @media ${({ theme }) => theme.screenSizes.lg} {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const StyledMovieIcon = styled(MovieIcon)<StyledProps>`
  color: ${({ theme, $burger }) =>
    !$burger ? theme.colors.darkGray : theme.colors.green};

  @media ${({ theme }) => theme.screenSizes.lg} {
    color: ${({ theme }) => theme.colors.green};
  }
`;

function Logo({ burger }: Props) {
  return (
    <Link href="/" passHref>
      <Wrapper $burger={burger}>
        <StyledMovieIcon $burger={burger} />
        {APP_NAME}
      </Wrapper>
    </Link>
  );
}

export default Logo;
