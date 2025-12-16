// This will tell Next.js which dynamic slug pages to pre-render
export async function generateStaticParams() {
  return [
    { slug: "example" },
    { slug: "another-term" },
    // add more slug values here
  ];
}

// Page component that shows the term based on the slug
export default function TermPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div>
      <h1>Term: {slug}</h1>
      {/* your UI here */}
    </div>
  );
}
