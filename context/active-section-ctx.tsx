"use client";

import React, { useContext, useState } from "react";
import { ActiveSectionCtxType, ActiveSectionCtxProviderProps, SectionName } from "@/common/types";

const ActiveSectionCtx = React.createContext<ActiveSectionCtxType | null>(null);

export default function ActiveSectionCtxProvider({
  children,
}: Readonly<ActiveSectionCtxProviderProps>) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionCtx.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionCtx.Provider>
  );
}

export function useActiveSectionCxt() {
  const ctx = useContext(ActiveSectionCtx);

  if (ctx === null) {
    throw new Error(
      "useActiveSectionCxt must be used only within a ActiveSectionCtxProvider!"
    )
  }

  return ctx;
}