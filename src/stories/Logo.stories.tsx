import { Story, Meta } from '@storybook/react';
import Logo from 'components/Logo';

type LogoProps = {
  burger: boolean;
};

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  burger: true,
};
