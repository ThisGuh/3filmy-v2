import Loader from 'react-loader-spinner';
import styled, { useTheme } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Spinner() {
  const theme = useTheme();

  return (
    <Wrapper>
      <Loader
        type="TailSpin"
        color={theme.colors.green}
        height={40}
        width={40}
      />
    </Wrapper>
  );
}

export default Spinner;
