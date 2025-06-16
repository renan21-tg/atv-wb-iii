import React from "react";

const AtlCliente: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Atualizacao</h1>
      </div>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="CPF do cliente a atualizar" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <input type="text" placeholder="Nome" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <input type="text" placeholder="Nome Social" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <input type="text" placeholder="Telefone" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Atualizar</button>
      </form>
    </div>
  );
};

export default AtlCliente;
