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

        <div className="rounded-3xl overflow-hidden shadow-xl border border-green-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.35067109595!2d107.113!3d-6.219!2m3!1f0!2f0!3f0!"
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
