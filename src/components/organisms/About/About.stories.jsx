import About from "./About";

export default {
  title: "Organisms/About",
  component: About,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
};

const Template = (args) => (
  <div style={{ background: "#0b0b0b", padding: 24, borderRadius: 16 }}>
    <About {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text:
    "I’ve been cutting hair for 7 years, and for me, it’s more than just a job—it’s a craft. Whether you want a fresh fade, a classic cut, or a beard.",
  years: 7,
  languages: ["en", "sp"],
};

export const CustomCopy = Template.bind({});
CustomCopy.args = {
  text:
    "barbering is where precision meets style. clean fades, classic cuts, and beard work—done right.",
  years: 12,
  languages: "en / it",
};
