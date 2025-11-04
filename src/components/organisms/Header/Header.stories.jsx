import React from 'react';
import { Header } from './Header';
import { headerData } from '../../../data/mock-data';


export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  argTypes: {
    variant: { control: 'radio', options: ['default', 'back'] },
    loggedIn: { control: 'boolean' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default_LoggedIn = Template.bind({});
Default_LoggedIn.args = {
  ...headerData,
};

export const Default_LoggedOut = Template.bind({});
Default_LoggedOut.args = {
  ...headerData,
  loggedIn: false,
};

export const Back_LoggedIn = Template.bind({});
Back_LoggedIn.args = {
  ...headerData,
  variant: 'back',
};

export const Back_LoggedOut = Template.bind({});
Back_LoggedOut.args = {
  ...headerData,
  variant: 'back',
  loggedIn: false,
};
