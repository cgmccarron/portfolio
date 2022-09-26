import ContactForm from "../components/contact/contactForm";
import ContactCard from "../components/contact/contactCard";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contact-title">Lets get in touch!</h1>

      <ContactForm />
      <ContactCard />
    </div>
  );
};

export default Contact;
