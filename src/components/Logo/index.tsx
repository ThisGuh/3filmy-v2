import styled from 'styled-components';
import Link from 'next/link';
import { RiMovie2Fill as MovieIcon } from '@react-icons/all-files/ri/RiMovie2Fill';
import { APP_NAME } from 'utils/constants';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const StyledMovieIcon = styled(MovieIcon)`
  color: ${({ theme }) => theme.colors.green};
`;

function Logo() {
  return (
    <Link href="/" passHref>
      <Wrapper>
        <StyledMovieIcon />
        {APP_NAME}
      </Wrapper>
    </Link>
  );
}

export default Logo;
