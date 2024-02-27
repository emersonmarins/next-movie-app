import Image from "next/image"
import home from "/public/assets/banners/home.jpg";
import { BiArrowFromRight, BiRightArrow } from "react-icons/bi";

export default function Banner() {
  return (
    <section className="w-full m-auto relative">
      <div className="flex justify-center w-full mx-auto h-auto bg-black">
        <Image src={home} alt="imagem filme" className="w-full h-full opacity-60" />
      </div>
      <div className="
          flex flex-col justify-end gap-1 items-end text-center absolute 
          px-5 py-10 bottom-0 right-0 w-full h-full"
      >
        <div className="flex justify-center items-center gap-1 p-2 bg-zinc-200 rounded-md font-black w-36 h-10 animate-pulse">
          <BiRightArrow className="text-xl" />
          <span>Ver trailer</span>
        </div>
      </div>
    </section>
  )
}