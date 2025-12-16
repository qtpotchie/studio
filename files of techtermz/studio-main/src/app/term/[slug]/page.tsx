export async function generateStaticParams() {
  return [
    { slug: "first-term" },
    { slug: "second-term" },
    // …other slugs you want to statically generate
  ];
}

export default function TermPage({ params }) {
  return <div>Term: {params.slug}</div>;
}
