import { Meta } from '@storybook/react';
import RendersWithProviders from 'helpers/RenderWithProviders';
import Logo from 'components/Logo';

export default {
  title: 'Logo',
  component: Logo,
} as Meta;

export const Primary = () => (
  <RendersWithProviders>
    <Logo />
  </RendersWithProviders>
);
