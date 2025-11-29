export default function ProgramDetail({ params }) {
  const { slug } = params;

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        Detailed information about the <strong>{slug.replace(/-/g, " ")}</strong> program will go here.
        You can include curriculum, schedules, activities, gallery images,
        teacher profiles, goals, and more.
      </p>
    </div>
  );
}
