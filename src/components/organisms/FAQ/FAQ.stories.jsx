import FAQ from './FAQ';

export default {
  title: 'Organisms/FAQ',
  component: FAQ,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
};

const items = [
  {
    id: 'q1',
    question: 'how does payment work when booking?',
    answer:
      'your card will be authorized to hold your spot but not charged until after your appointment.',
    open: true,
  },
  {
    id: 'q2',
    question: 'can i cancel or reschedule?',
    answer: 'yes—use the link in your confirmation or contact the shop.',
  },
  {
    id: 'q3',
    question: 'do you accept walk-ins?',
    answer: 'limited slots may be available; appointments are recommended.',
  },
];

const Template = (args) => (
  <div style={{ maxWidth: 720 }}>
    <FAQ {...args} />
  </div>
);

export const List = Template.bind({});
List.args = { items };
