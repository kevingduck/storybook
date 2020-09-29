import React from 'react';

import { WarningMessage } from './warning';

export default {
  title: 'Dialogs/Warning Message',
  component: WarningMessage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <WarningMessage {...args} />;

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