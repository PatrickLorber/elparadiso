import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_Service_ID,
        process.env.NEXT_PUBLIC_Email_Template,
        form.current,
        process.env.NEXT_PUBLIC_Public_Key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form style={{ color: "yellow" }} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea rows="10" name="message" />
      <input style={{ color: "red" }} type="submit" value="Send" />
    </form>
  );
}
