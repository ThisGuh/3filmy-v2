import { Story, Meta } from '@storybook/react';
import RendersWithProviders from 'helpers/RenderWithProviders';
import Logo from 'components/Logo';

type LogoProps = {
  burger: boolean;
};

export default {
  title: 'Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = args => (
  <RendersWithProviders>
    <Logo {...args} />
  </RendersWithProviders>
);

export const Primary = Template.bind({});

Primary.args = {
  burger: true,
};
