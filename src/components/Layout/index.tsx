import Theme from 'components/Theme';
import AppWrapper from 'components/AppWrapper';
import Menu from 'components/Menu';

function Layout() {
  return (
    <Theme>
      <AppWrapper>
        <Menu />
      </AppWrapper>
    </Theme>
  );
}

export default Layout;
