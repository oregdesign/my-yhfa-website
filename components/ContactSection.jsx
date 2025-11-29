"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Contact & Location</h2>
          <p className="text-gray-600">
            Visit our school or send us a message for inquiries.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — GOOGLE MAP */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-green-200 h-[540px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.38705047191!2d106.80603975!3d-6.20876395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3eaaa3b3cbf%3A0xdee3c9e9f2a8d1f1!2sMonas!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-green-100">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 
                             focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 
                             focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 
                             focus:ring-2 focus:ring-green-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white font-semibold 
                           rounded-xl hover:bg-green-800 transition"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-semibold">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-center font-semibold">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
