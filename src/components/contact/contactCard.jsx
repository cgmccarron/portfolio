import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <motion.div
      className="contact-card"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ x: 100 }}
    >
      <h3>Christian McCarron</h3>
      <h4>mccarron.christian13@gmail.com</h4>
      <h4>405-719-0986</h4>
    </motion.div>
  );
};

export default ContactCard;
