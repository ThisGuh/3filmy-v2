import Theme from 'components/Theme';
import AppWrapper from 'components/AppWrapper';
import Menu from 'components/Menu';
import MainContent from 'components/MainContent';

function Layout() {
  return (
    <Theme>
      <AppWrapper>
        <Menu />
        <MainContent />
      </AppWrapper>
    </Theme>
  );
}

export default Layout;
