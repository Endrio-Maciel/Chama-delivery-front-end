export async function getServerSideProps(context: any) {
  const { slug } = context.params;
  return { props: { slug } };
}

export default function Restaurante({ slug }: { slug: string }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{slug}</h1>
      <p>Aqui será exibido o cardápio do restaurante.</p>
    </main>
  );
}