import { useActiveSectionCxt } from "@/context/active-section-ctx";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(
    sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionCxt();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, sectionName, setActiveSection, timeOfLastClick]);
    
      return {
        ref,
      };
}