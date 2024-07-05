import FromCriarEvento from "@/components/formCriarEvento";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evento | Criar",
  description: "Pagina da criação de evento",
};

export default async function CriarEventoPage() {
  return (
    <section className="mt-10">
      <FromCriarEvento />
    </section>
  );
}
