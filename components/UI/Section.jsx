export default function Section({ title, children }) {
  return (
    <section className="py-12">
      <div className="container">
        {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
