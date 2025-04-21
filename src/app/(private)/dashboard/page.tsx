export default function Dashboard() {
  return (
    <main className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard do Restaurante</h2>
      <ul className="space-y-2">
        <li><a href="/dashboard/cardapio" className="text-blue-600 underline">Gerenciar Cardápio</a></li>
        <li><a href="#" className="text-blue-600 underline">Ver Relatórios</a></li>
        <li><a href="#" className="text-blue-600 underline">Compartilhar link da loja</a></li>
      </ul>
    </main>
  );
}