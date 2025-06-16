function TableServico() {
  const servicos = [
    { nome: "Corte M", preco: 40, id: 1 },
    { nome: "Corte F", preco: 60, id: 2 },
    { nome: "Barba", preco: 30, id: 3 },
    { nome: "Pitura", preco: 80, id: 4 },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Lista Serviço</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border text-center text-black bg-white rounded shadow">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Preço</th>
              <th className="border px-4 py-2">ID</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((servico, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{servico.nome}</td>
                <td className="border px-4 py-2">{servico.preco}</td>
                <td className="border px-4 py-2">{servico.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableServico;
