export default function PriceSection() {
  const prices = [
    {
      title: "Kindergarten",
      price: "Rp 3.500.000",
      desc: "Intro package for early childhood Islamic education.",
      details: [
        "Registration Fee Included",
        "Uniform (2 sets)",
        "Learning Kit Starter Pack",
        "Activity & Field Trip Fund"
      ]
    },
    {
      title: "Elementary School",
      price: "Rp 6.200.000",
      desc: "Full Islamic elementary level education with active learning.",
      details: [
        "Registration + Acceptance Fee",
        "Uniform (3 sets)",
        "Books & Learning Materials",
        "Yearly Activity Program"
      ]
    },
    {
      title: "Junior School",
      price: "Rp 8.750.000",
      desc: "Advanced middle-school Islamic curriculum with leadership.",
      details: [
        "Registration + Development Fee",
        "Uniform (3 sets)",
        "Books & Islamic Studies Kit",
        "Extracurricular Access"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">School Entrance Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Below is the estimated entrance fee for each educational level.
            All prices are placeholders and can be adjusted based on the
            school's official policy.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {prices.map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-3xl p-8 shadow-lg border border-green-100
                hover:shadow-xl transition
                flex flex-col
              "
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {item.title}
              </h3>

              <div className="text-4xl font-bold text-gray-900 mb-4">
                {item.price}
              </div>

              <p className="text-gray-600 mb-6">{item.desc}</p>

              <ul className="space-y-3 text-gray-700 flex-grow">
                {item.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <button
                className="
                  mt-8 w-full py-3
                  bg-green-700 text-white rounded-xl
                  font-semibold hover:bg-green-800 transition
                "
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
