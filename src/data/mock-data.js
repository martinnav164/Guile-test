export const headerData = {
  headerVariant: 'default',
  loggedIn: true,
  unread: 2,
  notifications: [
    {
      id: 'n1',
      avatar: 'https://i.pravatar.cc/60?img=1',
      text: 'malik replied to your message',
      date: 'today • 10:30',
    },
    {
      id: 'n2',
      avatar: 'https://i.pravatar.cc/60?img=2',
      text: 'you have a new review from kyle',
      date: 'yesterday • 17:42',
      cta: { label: 'view', onClick: () => {} },
    },
  ],
}

export const sideBarData = {
  photo: "/src/assets/barber.png",
  name: "malik johnson",
  role: "senior barber",
  city: "somerville ma",
  shop: { label: "Good Looks Barbershop", href: "#" },
  availability: { labelLeft: "next available", labelRight: "today at 3PM" },
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    spotify: "#",
  },
  bookLabel: "book an appointment",
}

// Option 1: Use import statements (recommended)
import photo1 from "../assets/photo-1.png";
import photo2 from "../assets/photo-2.png";
import photo3 from "../assets/photo-3.png";
import photo4 from "../assets/photo-4.png";
import photo5 from "../assets/photo-5.png";
import photo6 from "../assets/photo-6.png";
import photo7 from "../assets/photo-7.png";
import photo8 from "../assets/photo-8.png";

const urls = {
    a1: photo1,
    a2: photo2,
    a3: photo3,
    b1: photo4,
    b2: photo5,
    c1: photo6,
    c2: photo7,
    c3: photo8,
};
  
  const slides = [
    { layout: "A", images: [urls.a1, urls.a2, urls.a3] },
    { layout: "B", images: [urls.b1, urls.b2] },
    { layout: "C", images: [urls.c1, urls.c2, urls.c3] },
  ];

  export const workSliderData = { slides, title: "my cuts", interval: 5000 }

  export const faqData = [
    {
      id: 'q1',
      question: 'How do I pay when booking?',
      answer:
        'your card will be authorized to hold your spot but not charged until after your appointment.',
      open: true,
    },
    {
      id: 'q2',
      question: 'which payment methods do you accept?',
      answer: 'yes—use the link in your confirmation or contact the shop.',
    },
    {
      id: 'q3',
      question: 'Do I need to add a card on file?',
      answer: 'limited slots may be available; appointments are recommended.',
    },
    {
      id: 'q4',
      question: 'What if I cancel late or miss my cut?',
      answer: 'limited slots may be available; appointments are recommended.',
    },
  ]

  export const servicesData = {
    title: "services & add-ons",
    items: [
        {
          id: "skin-fade",
          title: "skin fade",
          duration: "40 min",
          price: 45,
          addons: 7,
          description:
            "smooth, seamless fade with a sharp transition from skin to hair",
        },
        {
          id: "taper-fade",
          title: "taper fade",
          duration: "35 min",
          price: 40,
          addons: 5,
          description:
            "subtle fade that blends hair gradually around the edges",
        },
        {
          id: "beard-trim",
          title: "beard trim & shape up",
          duration: "30 min",
          price: 25,
          addons: 0,
          description:
            "neat beard styling with sharp, clean lines for a polished look",
        },
      ]
  }

  const AV1 = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&fit=crop";
const AV2 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&fit=crop";
const AV3 = "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&fit=crop";

  export const testimonialsData = {
    title: "testimonials",
    reviews: [
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
            "Absolutely incredible experience with Malik! From the moment I walked in, his professionalism and attention to detail were evident. I asked for a skin fade and beard trim, and he absolutely nailed it. The fade is seamless, perfectly blended, and the beard trim was sharp and clean—exactly what I wanted!",
        },
        {
          avatar: AV3,
          name: "jason lewis",
          date: "dec 2nd, 2024",
          text:
            "Professional, on time, and the fade is perfect every time. I always leave feeling sharp. 10/10 recommend.",
        },
      ]
  }