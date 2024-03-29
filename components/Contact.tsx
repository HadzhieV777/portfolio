"use client";

import { useSectionInView } from "@/common/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

// TODO Handle form validation
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        You can reach me directly at{" "}
        <a className="underline" href="mailto:r.hadzhiev4277@gmail.com">
          r.hadzhiev4277@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          required
          type="email"
          name="email"
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          maxLength={5000}
          required
        />
        <button
          type="submit"
          className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
