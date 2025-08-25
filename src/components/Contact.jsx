import { motion } from "framer-motion";
import { profile } from "../data/content";
import emailjs from "emailjs-com";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vwv3d7f",
        "template_dwz87x8",
        e.target,
        "d8Md_T_kwnAnjp0Lh"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold">Let’s work together</h3>
          <p className="mt-2 text-white/80">
            Open to impactful AI/ML roles, consulting, and collaborations.
          </p>
          <div className="mt-4 space-y-2 text-white/80">
            <p>
              <span className="badge mr-2">Email</span>
              {profile.email}
            </p>
            <p>
              <span className="badge mr-2">Website</span>
              {profile.socials.website}
            </p>
          </div>
        </motion.div>

        <motion.form
          className="card grid gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={sendEmail}
        >
          <label className="grid gap-1">
            <span className="text-sm text-white/70">Your Name</span>
            <input
            name="user_name"
            required
            className="rounded-xl bg-black/20 ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-brand-500/60"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-white/70">Email</span>
            <input
            type="email"
            name="user_email"
            required
            className="rounded-xl bg-black/20 ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-brand-500/60"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-white/70">Message</span>
            <textarea
            name="message"
            required
            rows="4"
            className="rounded-xl bg-black/20 ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-brand-500/60"
            />
          </label>
          <button
            className="link-btn hover:bg-white/5"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {success === true && (
            <p className="text-green-400 text-sm mt-2">✅ Message sent!</p>
          )}
          {success === false && (
            <p className="text-red-400 text-sm mt-2">❌ Failed to send. Try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
