"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the subject and body of the email
    const subject = `Contact Form Submission Subject: ${formData.subject}`;
    const body = `${formData.message}`;

    // Open the user's default email client with pre-filled data
    window.location.href = `mailto:likan.stha@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Reset form after submission
    setFormData({ subject: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            placeholder="Your Subject"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full mt-2 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
