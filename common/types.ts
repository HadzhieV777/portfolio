import { links, projectsData } from "@/common/data";

export type ProjectProps = (typeof projectsData)[number];

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type SectionName = (typeof links)[number]["name"];

export type useSectionInViewProps = {
  sectionName: SectionName
}

export type ActiveSectionCtxProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionCtxType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
