import React from 'react';

import { PaymentInput } from './paymentinput';

export default {
  title: 'Form Elements/Payment Input',
  component: PaymentInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PaymentInput {...args} />;

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