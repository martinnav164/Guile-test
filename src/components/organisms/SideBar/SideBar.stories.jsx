import SideBar from "./SideBar";


export default {
  title: "Organisms/SideBar",
  component: SideBar,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
};

const avatar =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop";

export const Default = (args) => (
  <div style={{ background: "#0b0b0b", padding: 24, borderRadius: 16 }}>
    <SideBar {...args} />
  </div>
);

Default.args = {
  photo: avatar,
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
};
