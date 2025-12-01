import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x34q76o",      // service id
        "template_2qvslld",     // template id
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        "Em0KFA87tSp7RWPnR"       // public key
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setError("");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          setError("Failed to send message. Try again.");
          setSuccess("");
        }
      );
  };

  return (
    <div className="bg-[#0a0f2c] flex justify-center items-center text-white p-6">
      <form
        onSubmit={sendEmail}
        className="bg-[#111936] p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white/10"
      >
        <h2 className="text-2xl mb-4 font-semibold text-center">Contact Me</h2>

        {success && <p className="text-green-400 text-center mb-3">{success}</p>}
        {error && <p className="text-red-400 text-center mb-3">{error}</p>}

        {/* Name */}
        <label className="text-sm">Your Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 rounded-lg bg-[#1b254b] mt-1 mb-4 outline-none"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label className="text-sm">Your Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 rounded-lg bg-[#1b254b] mt-1 mb-4 outline-none"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <label className="text-sm">Message</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-3 rounded-lg bg-[#1b254b] mt-1 mb-6 outline-none"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
