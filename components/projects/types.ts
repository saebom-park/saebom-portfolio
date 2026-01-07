export type Slide = {
  src: string;
  alt: string;
  caption?: string;
  clickable?: boolean;
};

export type Project = {
  slug: "keeb-station" | "bulletin-board";
  name: string;
  badge?: "IN PROGRESS";
  tagline: string;
  summaryBullets: string[];
  stack: string[];
  links: { label: "Repo" | "README"; href: string }[];
  slides: Slide[];
};