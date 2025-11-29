"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

        <p className="text-center text-gray-600 mb-12">
          Send us questions about admission, school programs, or visits.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-green-100">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Your Name
              </label>
              <input
                name="name"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full py-3 bg-green-700 text-white font-semibold 
                rounded-xl hover:bg-green-800 transition
              "
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
                Something went wrong. Try again.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
