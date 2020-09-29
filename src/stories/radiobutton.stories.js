import React from 'react';

import { RadioButton } from './radiobutton';

export default {
  title: 'Controls/Radio Button',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};