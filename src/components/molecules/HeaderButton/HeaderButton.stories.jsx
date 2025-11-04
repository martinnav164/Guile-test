import React from 'react';
import { HeaderButton } from './HeaderButton';

export default {
  title: 'Molecules/HeaderButton',
  component: HeaderButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'panel', value: '#191919' },
      ],
    },
  },
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['default', 'hovered', 'pressed'],
    },
    count: {
      control: { type: 'number', min: 0 },
    },
  },
};

const Template = (args) => <HeaderButton {...args} />;

export const Default_NoCount = Template.bind({});
Default_NoCount.args = {
  label: 'view appointments',
  state: 'default',
  count: undefined,
};

export const Default_WithCount = Template.bind({});
Default_WithCount.args = {
  label: 'view appointments',
  state: 'default',
  count: 0,
};

export const Hover_NoCount = Template.bind({});
Hover_NoCount.args = {
  label: 'view appointments',
  state: 'hovered',
  count: undefined,
};

export const Hover_WithCount = Template.bind({});
Hover_WithCount.args = {
  label: 'view appointments',
  state: 'hovered',
  count: 0,
};

export const Pressed_NoCount = Template.bind({});
Pressed_NoCount.args = {
  label: 'view appointments',
  state: 'pressed',
  count: undefined,
};

export const Pressed_WithCount = Template.bind({});
Pressed_WithCount.args = {
  label: 'view appointments',
  state: 'pressed',
  count: 0,
};
