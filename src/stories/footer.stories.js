import React from 'react';

import { Footer } from './footer';

export default {
  title: 'Screen Areas/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Footer {...args} />;

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