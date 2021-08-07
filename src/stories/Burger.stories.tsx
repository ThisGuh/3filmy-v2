import { Meta } from '@storybook/react';
import Burger from 'components/Menu/Burger';

export default {
  title: 'Components/Menu/Burger',
  component: Burger,
} as Meta;

const Template = () => <Burger />;

export const Primary = Template.bind({});
