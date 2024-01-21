import { links, projectsData } from "@/lib/data";

export type ProjectProps = (typeof projectsData)[number];

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionCtxProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionCtxType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
