"use client";

import { useState } from "react";
import Layout from "@/app/pageLayout/layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback({ type: "", text: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: "error", text: "All fields are required." });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setFeedback({ type: "success", text: "Message sent successfully." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback({
        type: "error",
        text: error?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? We'd love to
            hear from you! Please send an email to{" "}
            <a
              href="mailto:support@gameportal.example.com"
              className="text-blue-600 underline hover:text-blue-700 transition"
            >
              360digitalproducts.official@gmail.com
            </a>
            , or use the form below to get in touch.
          </p>
        </div>

        {/* Form Wrapper with Blinking Border */}
        <div className="relative mt-8">

          {/* Blinking Border */}
          <div className="absolute -inset-[2px] rounded-xl border-2 border-blue-500 animate-pulse pointer-events-none"></div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative space-y-6 p-8 rounded-xl border border-gray-200 bg-transparent"
          >

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none resize-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {feedback.text ? (
              <p
                className={`text-sm ${
                  feedback.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {feedback.text}
              </p>
            ) : null}

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition active:scale-95 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </Layout>
  );
}