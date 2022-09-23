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
    <div className="contact-form">
      <form onSubmit={sendEmail} ref={form}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <input type="text" name="message" placeholder="Message" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
