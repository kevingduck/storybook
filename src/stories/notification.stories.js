import React from 'react';

import { Notification } from './notification';

export default {
  title: 'Dialogs/Notification',
  component: Notification,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Notification {...args} />;

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