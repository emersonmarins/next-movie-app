interface Props {
  showInfoRecaptcha: boolean,
  setShowInfoRecaptcha: (value: boolean) => void
}

export default function FooterForm({showInfoRecaptcha, setShowInfoRecaptcha}: Props) {
  return (
    <footer className="mt-5">
      {/* Remmenbar Password */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="rememberMe" name="rememberMe" className="w-5 h-5" />
        <label htmlFor={"rememberMe"} className="default-ltr-cache-v70qew ea3diy32">Lembre-se de mim
        </label>
      </div>
      {/* New for here */}
      <p className="flex gap-2 text-[hsla(0,0%,100%,1)] text-base font-light mt-4">Novo por aqui?
        <a className="font-medium" target="_self" href="/">Assine agora
        </a>.
      </p>
      {/* reCAPTCHA */}
      <div className="text-[#8c8c8c] text-xs mt-3 relative">
        <p className="block mt-4 mb-4 ml-0 mr-0 text-[#8c8c8c]">
          <span className="font-light text-zinc-400">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
          </span>&nbsp;
          {/* Show More */}
          <button 
            className={`text-[#0077eb] cursor-pointer inline transition-[height_2.5s_ease-in-out,opacity_2.5s_ease-in-out] duration-10 ${showInfoRecaptcha && "opacity-0"}`} 
            onClick={() => { setShowInfoRecaptcha(true) }}
          >Saiba mais.
          </button>
        </p>

        {/* Ifon reCAPTCHA */}
        <div className={`transition-[height_.5s_ease-in-out,opacity_.5s_ease-in-out] duration-500 opacity-0 ${showInfoRecaptcha && "opacity-100"}`} >
          <span className="font-light text-zinc-400">As informações recolhidas pelo Google reCAPTCHA estão sujeitas à
            <a href="https://policies.google.com/privacy" className="text-[#0077eb] font-normal cursor-pointer inline" target="_blank"> Política de Privacidade
            </a> e&nbsp;
            <a href="https://policies.google.com/terms" className="text-[#0077eb] font-normal cursor-pointer inline" target="_blank">Termos de Uso
            </a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).
          </span>
        </div>
      </div>
    </footer>
  )
}