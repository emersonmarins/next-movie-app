export default function Category(genero: any) {
  return(
    <div className="flex flex-wrap h-14 w-full m-auto relative shadow-xl rounded-sm overflow-hidden bg-zinc-900
      before:content-[''] before:bg-[conic-gradient(#ffffff31_20deg,_transparent_120deg);] before:h-[1080px] before:w-[1080px]
      before:absolute before:top-[-500px] before:rounded-sm before:animate-rotate
      after:content-[''] after:text-3xl after:font-medium after:absolute after:flex
      after:items-center after:justify-center after:top-[0.1px] after:left-[1px] after:right-[1.5px] after:bottom-[1.5px]
      after:text-zinc-400 after:bg-[#121212] after:shadow-[inset_0_3px_14px_2px_rgba(0,_0,_0,_0.658)] after:rounded-sm"
    >
      <h1 className="absolute w-full h-full flex justify-center items-center font-medium text-xl z-10 uppercase text-zinc-200" >
        {genero.genero}
      </h1>
    </div>
  )
}