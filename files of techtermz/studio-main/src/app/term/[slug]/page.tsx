export async function generateStaticParams() {
  return [{ slug: "sample" }];
}

export default function TermPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main style={{ padding: 40 }}>
      <h1>Term Page</h1>
      <p>Slug: {params.slug}</p>
    </main>
  );
}
