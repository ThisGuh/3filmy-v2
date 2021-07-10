import React from 'react';
import Theme from 'components/Theme';

type Props = {
  children: React.ReactNode;
};

function RendersWithProviders({ children }: Props) {
  return <Theme>{children}</Theme>;
}

export default RendersWithProviders;
