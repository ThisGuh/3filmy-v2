import React from 'react';
import Theme from 'components/Theme';
import AppWrapper from 'components/AppWrapper';
import Menu from 'components/Menu';

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Theme>
      <AppWrapper>
        <Menu />
        {children}
      </AppWrapper>
    </Theme>
  );
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
