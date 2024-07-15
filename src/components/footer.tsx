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
    <footer className="w-full min-w-[500px] bg-gray-800 flex flex-col justify-between">
      <section className="flex justify-center gap-14 items-start px-2 py-12 medium:hidden">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl whitespace-nowrap">Sobre</h2>
          <hr className="my-6 h-[2px] border-t-0 bg-secondary" />
          <p className="max-w-[800px]">
            A <strong>Ingresso.com</strong> é uma empresa inovadora no setor de
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
          <a className="hover:underline" href="/">
            Início
          </a>
          <a className="hover:underline mt-1" href="/">
            Sobre
          </a>
          <a className="hover:underline mt-1" href="/">
            Email
          </a>
          <a className="hover:underline mt-1" href="/">
            Contato
          </a>
          <a className="hover:underline mt-1" href="/">
            Produtos
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl whitespace-nowrap">Fale Conosco</h2>
          <hr className="my-6 h-[2px] border-t-0 bg-secondary" />
          <a href="/" className="flex items-center gap-2 hover:underline">
            <FaFacebook size={18} />
            <p>Facebook</p>
          </a>
          <a href="/" className="flex items-center gap-2 mt-1 hover:underline">
            <FaInstagram size={18} />
            <p>Instagram</p>
          </a>
          <a href="/" className="flex items-center gap-2 mt-1 hover:underline">
            <FaGoogle size={18} />
            <p>Google</p>
          </a>
          <a href="/" className="flex items-center gap-2 mt-1 hover:underline">
            <FaWhatsapp size={18} />
            <p className="whitespace-nowrap">+55 21 9999999</p>
          </a>
        </div>
      </section>
      <div className="bg-gray-900 w-full min-w-[500px] h-10 flex items-center justify-center">
        <span>@Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
