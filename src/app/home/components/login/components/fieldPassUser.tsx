import { BiXCircle } from "react-icons/bi";

export default function PassUser({ errorUserPass }: Record<string, boolean>) {
  return (
    <div className="relative flex flex-col flex-wrap flex-grow align-text-top">
      <label className="">Senha</label>
      {/* Input */}
      <div className="flex-grow">
        <input type="password" autoComplete="password" name="password" aria-invalid="true" required
          className="w-full h-12 rounded text-neutral-500 placeholder-neutral-500 pl-1 bg-transparent border border-neutral-700"
          placeholder="Digite sua senha"
        />
      </div>
      {/* ATENCION */}
      {errorUserPass && (
        <div className="flex mt-1 items-center gap-1 text-red-800 text-[13px]">
          <BiXCircle className="text-lg" />
          <span className="text-red-800 text-[13px]">A senha deve ter entre 4 e 60 caracteres.</span>
        </div>
      )}
    </div>
  )
}