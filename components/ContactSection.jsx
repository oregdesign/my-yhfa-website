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
          <h2 className="text-4xl font-bold mb-3">Pesan Dan Lokasi</h2>
          <p className="text-gray-600">
            Silahkan kunjungi sekolah kami atau kirim pesan untuk mendapatkan informasi lebih lanjut.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-green-200 h-[540px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0945669674425!2d107.13762577499064!3d-6.251269193737167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985069127c8c3%3A0x2210108ae7e1f563!2sSDIT%20Hasanah%20Fathimiyah!5e0!3m2!1sen!2sid!4v1764878618393!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white p-10 rounded-xl shadow-xl border border-green-100">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 
                             focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Alamat Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 
                             focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 
                             focus:ring-2 focus:ring-green-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white font-semibold 
                           rounded-lg hover:bg-green-800 transition"
              >
                {status === "loading" ? "Sending..." : "Kirim Pesan"}
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
