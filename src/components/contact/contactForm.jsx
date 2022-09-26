import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_20h8tex",
        "template_2afaxi8",
        form.current,
        "ttwgRJEk8gEdziCRV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.reset;
  };

  return (
    <form onSubmit={sendEmail} ref={form} className="contact-form">
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea
        type="text"
        name="message"
        placeholder="Message"
        className="contact-text-area"
        required
      />
      <input type="submit" />
    </form>
  );
};

export default ContactForm;
