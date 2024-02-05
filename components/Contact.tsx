"use client";

import { useSectionInView } from "@/common/hooks";
import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 mb-28">
      <SectionHeading>Contact Me</SectionHeading>
      <p>You can reach me directly at <a className="underline" href="mailto:r.hadzhiev4277@gmail.com">r.hadzhiev4277@gmail.com</a> or through this form.</p>
      <form></form>
    </section>
  );
}
