import React from 'react';
import { UserMenu } from './UserMenu';

export default {
  title: 'Molecules/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'gray', value: '#191919' },
      ],
    },
  },
  argTypes: {
    onOpenChange: { action: 'openChange' },
  },
};

const baseItems = [
  { id: 'account', label: 'account', href: '#' },
  { id: 'profile', label: 'profile', href: '#' },
  { id: 'appointments', label: 'appointments', href: '#', countBadge: 0 },
  { id: 'wallet', label: 'wallet', href: '#' },
  { id: 'reviews', label: 'reviews', href: '#' },
  { id: 'signout', label: 'sign out', kind: 'action' },
];

const avatarUrl =
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=facearea&facepad=2';

export const Default = (args) => <UserMenu {...args} />;
Default.args = {
  avatarSrc: avatarUrl,
  items: baseItems,
  defaultOpen: false,
};

export const Opened = (args) => <UserMenu {...args} />;
Opened.args = {
  ...Default.args,
  defaultOpen: true,
};

export const WithSeparators = (args) => <UserMenu {...args} />;
WithSeparators.args = {
  ...Default.args,
  defaultOpen: true,
  items: [
    { id: 'account', label: 'account', href: '#', separatorAbove: false },
    { id: 'profile', label: 'profile', href: '#' },
    { id: 'appointments', label: 'appointments', href: '#', countBadge: 0 },
    { id: 'wallet', label: 'wallet', href: '#', separatorAbove: true },
    { id: 'reviews', label: 'reviews', href: '#' },
    { id: 'signout', label: 'sign out', kind: 'action' },
  ],
};
