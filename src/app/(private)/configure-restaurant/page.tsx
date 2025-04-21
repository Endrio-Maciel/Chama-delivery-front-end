export default function ConfigurarRestaurante() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-4">
      <h2 className="text-2xl font-semibold">Configurar Restaurante</h2>
      <input type="text" placeholder="Nome do restaurante" className="border rounded p-2 w-full max-w-md" />
      <textarea placeholder="Descrição do restaurante" className="border rounded p-2 w-full max-w-md h-24" />
      <button className="bg-green-600 text-white px-4 py-2 rounded-xl">Salvar</button>
    </main>
  );
}