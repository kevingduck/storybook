import React from 'react';

import { ErrorMessage } from './errormessage';

export default {
  title: 'Dialogs/Error Message',
  component: ErrorMessage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ErrorMessage {...args} />;

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