import FAQItem from './FAQItem';

export default {
  title: 'Molecules/FAQItem',
  component: FAQItem,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
};

const Template = (args) => <div style={{ maxWidth: 720 }}><FAQItem {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  index: 1,
  question: 'how does payment work when booking?',
  answer: 'your card will be authorized to hold your spot but not charged until after your appointment.',
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  defaultOpen: true,
};
