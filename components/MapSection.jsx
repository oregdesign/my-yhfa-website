export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Location
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Visit our school located in Cikarang Barat.  
          We welcome parents, students, and the community.
        </p>

        <div className="rounded-xl overflow-hidden shadow-xl border border-[#0b8d35] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0945669674425!2d107.13762577499064!3d-6.251269193737167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985069127c8c3%3A0x2210108ae7e1f563!2sSDIT%20Hasanah%20Fathimiyah!5e0!3m2!1sen!2sid!4v1764878618393!5m2!1sen!2sid"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
