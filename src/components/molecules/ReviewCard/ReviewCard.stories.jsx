import ReviewCard from './ReviewCard';

export default {
  title: 'Molecules/ReviewCard',
  component: ReviewCard,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
};

const baseArgs = {
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&q=80',
  name: 'michael rodriguez',
  text:
    "Malik is a true artist! He gave me the best taper fade I’ve ever had— super clean and precise. He took his time to make sure every detail was perfect. My beard has never looked sharper, and I left the chair feeling fresh and confident. Highly recommend!",
  date: 'feb 5th, 2025',
};

const Template = (args) => (
  <div style={{ width: 840 }}>
    <ReviewCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { ...baseArgs, state: 'default' };

export const Hovered = Template.bind({});
Hovered.args = { ...baseArgs, state: 'hovered' };

export const Clicked = Template.bind({});
Clicked.args = { ...baseArgs, state: 'clicked' };

export const Inactive = Template.bind({});
Inactive.args = { ...baseArgs, state: 'inactive' };

export const Compact = (args) => (
  <div style={{ width: 520 }}>
    <ReviewCard {...baseArgs} compact state="default" />
  </div>
);
