import Services from "./Services";

export default {
  title: "Organisms/Services",
  component: Services,
  tags: ["autodocs"],
};

const items = [
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
];

export const Default = {
  args: {
    title: "services & add-ons",
    items,
    viewAllLabel: "view all services",
  },
};
