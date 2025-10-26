import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import { Button } from "./common/Button";
export function Contact() {
  const [status, setStatus] = useState(null); // "success", "error", "loading", or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {status && (
        <div
          className={`fixed bottom-5 right-5 px-4 py-3 rounded-xl shadow-lg text-white transition-all duration-300 ${
            status === "success"
              ? "bg-primary-teal"
              : status === "error"
              ? "bg-red-500"
              : "bg-neutral-dark"
          }`}
        >
          {status === "loading"
            ? "⏳ Sending..."
            : status === "success"
            ? "✅ Message sent successfully!"
            : "❌ Something went wrong. Please try again."}
        </div>
      )}

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-neutral-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-neutral-light p-8 rounded-xl shadow-soft"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">
              Get In Touch
            </h3>
            <p className="text-neutral-dark mb-8">
              I'm currently looking for new opportunities and would love to hear
              from you. Whether you have a question or just want to say hi, I'll
              get back to you as soon as possible!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:jorge.rangeldelatejera@gmail.com"
                className="flex items-center group"
              >
                <div className="p-3 bg-primary-teal/10 rounded-full mr-4 group-hover:bg-primary-teal/20 transition-colors">
                  <MailIcon className="w-6 h-6 text-primary-teal" />
                </div>
                <span className="text-neutral-dark group-hover:text-primary-teal transition-colors">
                  jorge.rangeldelatejera@gmail.com
                </span>
              </a>
              <a href="sms:+13435726402" className="flex items-center group">
                <div className="p-3 bg-primary-blue/10 rounded-full mr-4 group-hover:bg-primary-blue/20 transition-colors">
                  <PhoneIcon className="w-6 h-6 text-primary-blue" />
                </div>
                <span className="text-neutral-dark group-hover:text-primary-blue transition-colors">
                  (343) 572-6402
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/jorgerangel-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="p-3 bg-[#0077B5]/10 rounded-full mr-4 group-hover:bg-[#0077B5]/20 transition-colors">
                  <LinkedinIcon className="w-6 h-6 text-[#0077B5]" />
                </div>
                <span className="text-neutral-dark group-hover:text-[#0077B5] transition-colors">
                  linkedin.com/in/jorgerangel-t
                </span>
              </a>
              <a
                href="https://github.com/JorgeRan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="p-3 bg-neutral-dark/10 rounded-full mr-4 group-hover:bg-neutral-dark/20 transition-colors">
                  <GithubIcon className="w-6 h-6 text-neutral-dark" />
                </div>
                <span className="text-neutral-dark group-hover:text-neutral-dark/70 transition-colors">
                  github.com/JorgeRan
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-neutral-light p-8 rounded-xl shadow-soft"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">
              Send a Message
            </h3>
            <form
              id="contact_form"
              className="space-y-4"
              method="POST"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xyznewjd"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-dark mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-dark mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  className="w-full px-4 py-2 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-dark mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
