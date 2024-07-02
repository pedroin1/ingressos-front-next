import { FaMailBulk } from "react-icons/fa";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-screen bg-gray-800 flex flex-col justify-between">
      <section className="flex justify-center gap-14 items-start px-2 py-12">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl whitespace-nowrap">Sobre</h2>
          <hr className="my-6 h-[2px] border-t-0 bg-secondary" />
          <p className="max-w-[800px]">
            A <strong>Main Event</strong> é uma empresa inovadora no setor de
            venda de ingressos, dedicada a proporcionar experiências únicas e
            inesquecíveis aos seus clientes. Com uma plataforma intuitiva e de
            fácil navegação, a Main Evento facilita a compra de ingressos para
            os mais diversos tipos de eventos, desde shows e festivais, até
            peças de teatro e eventos esportivos.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl whitespace-nowrap">Links Úteis</h2>
          <hr className="my-6 h-[2px] border-t-0 bg-secondary" />
          <a href="/">Início</a>
          <a href="/">Sobre</a>
          <a href="/">Email</a>
          <a href="/">Contato</a>
          <a href="/">Produtos</a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl whitespace-nowrap">Fale Conosco</h2>
          <hr className="my-6 h-[2px] border-t-0 bg-secondary" />
          <a href="/" className="flex items-center gap-2">
            <FaFacebook size={18} />
            <p>Facebook</p>
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaInstagram size={18} />
            <p>Instagram</p>
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaGoogle size={18} />
            <p>Google</p>
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaWhatsapp size={18} />
            <p>+55 21 9999999</p>
          </a>
        </div>
      </section>
      <div className="bg-gray-900 w-screen h-10 flex items-center justify-center">
        <span>@Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
