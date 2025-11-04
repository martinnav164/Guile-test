import { Testimonials } from "./Testimonials";

export default {
  title: "Organisms/Testimonials",
  component: Testimonials,
};

const AV1 = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&fit=crop";
const AV2 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&fit=crop";
const AV3 = "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&fit=crop";

const reviews = [
  {
    avatar: AV1,
    name: "michael rodriguez",
    date: "feb 5th, 2025",
    text:
      "Malik is a true artist! He gave me the best taper fade I’ve ever had—super clean and precise. " +
      "He took his time to make sure every detail was perfect. My beard has never looked sharper, " +
      "and I left the chair feeling fresh and confident. Highly recommend!",
  },
  {
    avatar: AV2,
    name: "john james",
    date: "jan 12th, 2025",
    text:
      "Absolutely incredible experience. The shop felt welcoming the moment I walked in, and Malik’s attention to detail was obvious. " +
      "I asked for a classic cut with a subtle taper and he nailed it—clean lines and the beard shape I wanted.",
  },
  {
    avatar: AV3,
    name: "jason lewis",
    date: "dec 2nd, 2024",
    text:
      "Professional, on time, and the fade is perfect every time. I always leave feeling sharp. 10/10 recommend.",
  },
];

export const Default = {
  args: {
    title: "testimonials",
    reviews,
    initialIndex: 0,
    onMoreClick: () => {},
  },
};
