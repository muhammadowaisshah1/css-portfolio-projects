"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
// import styles from "./ContactPage.module.css";
import styles from "../../component/contactPage.module.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        "service_6m1blxk",
        "template_v2rq79h",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "cI8VS8q0vTdbHkFtX"
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className={styles.title}>
          Contact Me
        </motion.h1>

        {isSubmitted ? (
          <motion.div className={styles.messageText}>
            <p>Thank you for your message! I will get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form onSubmit={handleSubmit}>
            <div>
              <label className={styles.inputLabel} htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>

            <div>
              <label className={styles.inputLabel} htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>

            <div>
              <label className={styles.inputLabel} htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={styles.textareaField}
                required
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;
