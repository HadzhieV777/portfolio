"use server";

import { validateString } from "@/common/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email!",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message!",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "r.hadzhiev4277@gmail.com",
      subject: "Hello World",
      reply_to: senderEmail as string,
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
  } catch (error) {
    console.log(error);
  }
};
