'use client';
import Card from "@/components/card";
import RegistrarConsumo from "@/components/Forms/RegistrarConsumo";
import { useState } from "react";

const Page = () => {
    const [cardSelecionado, setCardSelecionado] = useState<string>("");

    const selecionarCard = (tipo: string) => {
        setCardSelecionado(tipo);
    };

    const renderConteudo = () => {
        switch (cardSelecionado) {
        case "registrar":
            return <RegistrarConsumo />;
        default:
            return null;
        }
    };

    return (
        <div>
        <div className="flex justify-center">
            <h1 className="text-blue-600 text-4xl font-bold mb-4">Consumo</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
            <Card
            titulo="Registrar Consumo"
            descricao="Registre o consumo de produtos e serviços por cliente"
            onClick={() => selecionarCard("registrar")}
            />
        </div>

        <div className="flex justify-center">
            {cardSelecionado && (
            <div className="mt-6 p-4 bg-gray-100 rounded-xl w-full max-w-2xl">
                {renderConteudo()}
            </div>
            )}
        </div>
        </div>
    );
};

export default Page;