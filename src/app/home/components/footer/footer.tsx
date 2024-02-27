import Image from "next/image";
import logo from "/public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full relative pt-24 pb-10
    before:content-[''] before:absolute before:-left-36 before:-right-36 before:bottom-0 before:top-0 before:h-full 
    before:bg-[var(--color-background-deg03)] before:-z-10
   "
    >
      <div className="flex gap-4">
        <div className="flex flex-col gap-8 leading-6 flex-grow-[3] w-1/4 ">
          <div className="max-w-64 min-w-32">
            <Image className="w-full h-auto" src={logo} width={140} height={50} alt={"logo"} />
          </div>
          <div className="flex flex-col gap-5 pr-10 font-light">
            <div className="text-sm font-light">
              <span className="text-[var(--color-text-07)]">Dúvidas? Ligue <a className="text-[var(--color-text-02)]" href="tel:0800 XXX XXX">0800 XXX-XXX</a></span>
            </div>
            <div>
              <p>
                Assista suas Séries e Filmes Online prediletos em HD e não esqueça da pipoca! Boa
                Diversão!!!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-[var(--color-text-03)] gap-8 leading-6 flex-grow-[2] w-1/4 ">
          <div>
            <div>
              <ul className="flex flex-col gap-2 font-extralight cursor-pointer">
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Perguntas frequentes</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Central de Ajuda</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Conta</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Resgatar cartão pré-pago</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Comprar cartão pré-pago</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Formas de assistir</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Termos de Uso</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Privacidade</a></li>

              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-[var(--color-text-03)] gap-8 leading-6 flex-grow-[2] w-1/4 ">
          <ul className="flex flex-col gap-2 font-extralight cursor-pointer">
            <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Informações corporativas</a></li>
            <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Entre em contato</a></li>
            <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Avisos legais</a></li>
            <li><a href="#" className="cursor-pointer hover:text-[var(--color-text-07)] hover:font-normal">Só na Marins Movies</a></li>
          </ul>
        </div>
      </div>
      {/* line  */}
      <span className="w-full border-b-[1px] border-neutral-800 mt-20 mb-10"></span>
      <div className="flex justify-between font-extralight text-[0.8rem]  w-full ">
        <span>© 2023 MarinsMovies - Assistir Séries Online HD</span>
        <span>Feito por Emerson Marins</span>
      </div>
    </footer>
  )
}