export default function VisionMission() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold tracking-wide">Vision & Mission</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our foundation is committed to nurturing a Qur’ani generation with strong
          character, knowledge, and contribution to society.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* ------------------- VISION SECTION ------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE LEFT */}
          <div className="w-full">
            <img
              src="/vision.jpg"
              alt="Vision"
              className="rounded-2xl shadow-xl w-full h-[380px] object-cover"
            />
          </div>

          {/* TEXT RIGHT */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-green-700">Our Vision</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              To shape a generation that is Qur’ani, noble in character, intellectually
              strong, and ready to contribute positively to the community.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 text-xl">•</span>
                Developing students with balanced intellectual and spiritual growth.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 text-xl">•</span>
                Encouraging lifelong learning guided by Islamic values.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 text-xl">•</span>
                Building responsible young Muslims who uphold Islamic ethics.
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------- MISSION SECTION ------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT LEFT */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-green-700">Our Mission</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              To provide high-quality Islamic education that supports character
              development, knowledge, and practical Islamic practice.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 text-xl">•</span>
                Delivering structured Qur'an learning and strong Akhlaq education.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 text-xl">•</span>
                Creating an inspiring learning environment centered on Islamic values.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 text-xl">•</span>
                Empowering teachers to guide students with compassion and excellence.
              </li>
            </ul>
          </div>

          {/* IMAGE RIGHT */}
          <div className="w-full">
            <img
              src="/mission.jpg"
              alt="Mission"
              className="rounded-2xl shadow-xl w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
