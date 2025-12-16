// REQUIRED for static export
export async function generateStaticParams() {
  return [
    { slug: "sample" }
  ];
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function TermPage({ params }: PageProps) {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Term Page</h1>
      <p>Slug: <strong>{params.slug}</strong></p>
    </main>
  );
}
