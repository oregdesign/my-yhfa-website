export default function SchoolCard({ data }) {
  return (
    <article className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-lg">{data.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{data.shortDescription}</p>
      <div className="mt-4 text-xs text-gray-500">NPSN: {data.npsn || '-'}</div>
    </article>
  );
}
