import { BiXCircle } from "react-icons/bi";

export default function NameUser({ errorUserEmail }: Record<string, boolean>) {
  return (
    <div className="relative flex flex-wrap flex-grow align-text-top">
      <label className="">Email ou número de telefone</label>
      {/* Input */}
      <div className="flex-grow">
        <input type="text" autoComplete="email" name="userLoginId" id="userLoginId"
          className="w-full h-12 rounded text-neutral-500 placeholder-neutral-500 pl-1 bg-transparent border border-neutral-700"
          placeholder="Digite seu Telefone/Email"
        />
      </div>
      {/* ATENCION */}
      {errorUserEmail && (
        <div className="flex mt-1 items-center gap-1 text-red-800 text-[13px]">
          <BiXCircle className="text-lg" />
          <span className="text-red-800 text-[13px]">Informe um email ou número de telefone válido.</span>
        </div>
      )}
    </div>
  )
}