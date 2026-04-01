"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          business_name: formData.businessName || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out! We'll be in touch within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    } catch {
      setStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cream mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="w-full bg-ink-3 border border-border-2 rounded-lg px-4 py-3 text-cream placeholder-muted focus:outline-none focus:border-fire focus:bg-ink-4 transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-cream mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full bg-ink-3 border border-border-2 rounded-lg px-4 py-3 text-cream placeholder-muted focus:outline-none focus:border-fire focus:bg-ink-4 transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-cream mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
          className="w-full bg-ink-3 border border-border-2 rounded-lg px-4 py-3 text-cream placeholder-muted focus:outline-none focus:border-fire focus:bg-ink-4 transition-all"
        />
      </div>

      {/* Business Name */}
      <div>
        <label
          htmlFor="businessName"
          className="block text-sm font-medium text-cream mb-2"
        >
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Your Company"
          className="w-full bg-ink-3 border border-border-2 rounded-lg px-4 py-3 text-cream placeholder-muted focus:outline-none focus:border-fire focus:bg-ink-4 transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-cream mb-2"
        >
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="What are you looking to build?"
          className="w-full bg-ink-3 border border-border-2 rounded-lg px-4 py-3 text-cream placeholder-muted focus:outline-none focus:border-fire focus:bg-ink-4 transition-all resize-none"
        ></textarea>
      </div>

      {/* Status Message */}
      {status.type === "success" && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
          <p className="text-green-300 text-sm font-medium">{status.message}</p>
        </div>
      )}

      {status.type === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm font-medium">{status.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full py-4 bg-fire text-ink font-semibold rounded-lg hover:bg-orange-600 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-muted text-center">
        We typically respond within 24 hours. Available Saturday & Sunday 9am–5pm
        MST.
      </p>
    </form>
  );
}
