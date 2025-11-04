import AddonsCard from "./AddonsCard";

export default {
  title: "Molecules/AddonsCard",
  component: AddonsCard,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "skin fade",
    duration: "40 min",
    price: 45,
    addons: 7,
    description:
      "smooth, seamless fade with a sharp transition from skin to hair",
  },
};

export const NoExtras = {
  args: {
    title: "classic cut",
    duration: "30 min",
    price: 35,
    addons: 0,
    description:
      "traditional cut tailored to your style, scissor and clipper blend.",
  },
};

export const LongText = {
  args: {
    title: "beard trim & shape",
    duration: "25 min",
    price: 30,
    addons: 3,
    description:
      "precision trim with clean lines and a natural finish. includes hot towel and oil treatment for a softer, fuller look.",
  },
};
