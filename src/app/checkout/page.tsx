"use client";

import InputComponent from "@/components/input";
import { useState } from "react";

export default function PageCheckOut() {
  const [email, setEmail] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<number>();
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [ccv, setCcv] = useState<number>(0);

  const handleSubmit = () => {
    console.log(email, cardName, cardNumber, expiryDate, ccv);
  };

  return (
    <section className="flex gap-8 mt-10 medium:flex-col">
      <div className="w-full min-w-[320px] max-w-[350px] py-8 px-4 font-bold bg-secondary rounded-xl">
        <h1 className="text-2xl font-bold">Resumo da compra</h1>
        <div className="flex flex-col mt-6 mb-6">
          <p className="font-semibold">Desenvolvimento de software</p>
          <p className="font-semibold">Sao Paulo</p>
          <p className="font-semibold">Sextas Feira, 30/12/2022</p>
        </div>
        <p className="font-semibold">preco total</p>
      </div>
      <div className="w-full flex-1 min-w-[320px] flex-col py-8 px-4 bg-secondary rounded-xl">
        <h1 className="text-2xl font-bold">Informacoes do pagamento</h1>
        <div className="flex gap-2 flex-col mt-6">
          <InputComponent
            label="E-mail"
            type="email"
            placeholder="Digite seu email..."
            className="min-w-[300px]"
            value={email}
            setValue={setEmail}
          />
          <InputComponent
            label="Nome no cartão"
            type="text"
            placeholder="Nome no cartão..."
            className="min-w-[300px]"
            value={cardName}
            setValue={setCardName}
          />
          <InputComponent
            label="Numero do cartão"
            type="number"
            placeholder="Numero do cartão..."
            className="min-w-[300px]"
            value={cardNumber}
            setValue={setCardNumber}
          />
          <div className="flex justify-between mb-4 gap-4 flex-shrink-1 small:flex-col">
            <InputComponent
              label="Vencimento"
              type="date"
              className="min-w-[100px] w-[250px]"
              value={expiryDate}
              setValue={setExpiryDate}
            />
            <InputComponent
              label="CCV"
              type="number"
              placeholder="ex: 111"
              className="min-w-[100px] max-w-[200px]"
              value={ccv}
              setValue={setCcv}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-btn-primary uppercase text-secondary font-bold px-2 py-2 rounded-md hover:bg-[#c1c1c1]"
          >
            finalizar pagamento
          </button>
        </div>
      </div>
    </section>
  );
}
