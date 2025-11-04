import WorksSlider from "./WorksSlider";

export default {
  title: "Organisms/WorksSlider",
  component: WorksSlider,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};

const urls = {
  a1: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=80",
  a2: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1400&q=80",
  a3: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1600&q=80",
  b1: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1600&q=80",
  b2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
  c1: "https://images.unsplash.com/photo-1520975922284-1b2a6be1dd0a?w=1200&q=80",
  c2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&q=80",
  c3: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80",
};

const slides = [
  { layout: "A", images: [urls.a1, urls.a2, urls.a3] },
  { layout: "B", images: [urls.b1, urls.b2] },
  { layout: "C", images: [urls.c1, urls.c2, urls.c3] },
];

export const Default = (args) => (
  <div style={{ padding: 20, background: "#0b0b0b" }}>
    <WorksSlider {...args} />
  </div>
);
Default.args = { slides, title: "my works", interval: 5000 };
