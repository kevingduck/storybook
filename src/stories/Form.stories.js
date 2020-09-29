import React from 'react';

import { Form } from './Form';

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Form',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Form',
};

export const Large = Template.bind({});
Large.args = {
  // size: 'large',
  label: 'Form',
};

export const Small = Template.bind({});
Small.args = {
  // size: 'small',
  label: 'Form',
};
