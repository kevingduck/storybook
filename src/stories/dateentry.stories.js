import React from 'react';

import { DateEntry } from './dateentry';

export default {
  title: 'Form Elements/Date Entry',
  component: DateEntry,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <DateEntry {...args} />;

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