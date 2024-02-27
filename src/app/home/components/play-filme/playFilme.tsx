import Image from "next/image";
import background02 from "/public/assets/backgrounds/background02.jpg";
import { FaPlay } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import { useState } from "react";

export default function PlayFilme(info: any) {
  const [playFilme, setPlayFilme] = useState(false);
  const string = info.info["iframe"];
  const regex = /src='(.*?)'/g;
  let matches = string.match(regex);
  let urls = [];
  while (matches = regex.exec(string)) {
    urls.push(matches[1]);
  }
  urls = urls[0];


  return (
    <section className="flex flex-col gap-10 h-auto w-full m-auto overflow-hidden">
      {playFilme ? (
        <section className="h-auto relative mt20 m-auto w-full overflow-hidden">
          <iframe src={info.info["iframe"]} className="w-full min-h-[600px] h-[calc(30vw)] max-h-[1080px]" name="Player" allow="encrypted-media" allowFullScreen></iframe>
        </section>
      ) : (
        <section className="h-auto relative mt20 m-auto w-full overflow-hidden">
          <Image src={background02} alt="imagem do filme"
            className="w-full h-full opacity-100"
          />
          <div className="
              flex flex-col gap-1 text-center absolute bottom-0 right-0 w-full h-full justify-center items-center p-5 bg-[linear-gradient(to_bottom,_rgb(0,_0,_0),_rgba(0,_0,_0,_0))_!important]"
          >
            <h1 className="text-center text-3xl pr-[3%] font-medium"></h1>
            <span className="text-base font-thin text-center "></span>
            <FaPlay className="text-9xl text-zinc-200 shadow-2xl animate-pulse cursor-pointer"
              onClick={() => { setPlayFilme(true) }}
            />
          </div>
        </section>
      )}
      {/* line  */}
      <span className="w-full border-b-[1px] border-neutral-900"></span>
      <section className="flex flex-wrap gap-8">
        <Image src={info.info["url-img"]} width={144} height={144} alt="imagem do filme"
          className="w-36 h-auto opacity-100 shadow-2xl"
        />
        <div className="flex flex-col gap-5">
          {/* Title */}
          <h1 className="text-3xl font-normal tracking-tight text-zinc-100">{info.info["title"]}</h1>
          {/* Info Filme */}
          <div className="flex gap-8 text-xs font-light text-neutral-200">
            <p className="">Apr. 14, 2023</p>
            <p className="">United Kingdom</p>
            <p className="">101 Min.</p>
          </div>
          {/* Stars */}
          <div className="flex gap-4 items-center">
            <span className="text-4xl bg-neutral-900 w-14 h-14 py-2 text-center text-[var(--main-color)] rounded-md shadow-xl">5</span>
            <div className="flex text-4xl gap-1">
              <BiStar className="text-neutral-600" />
              <BiStar className="text-neutral-600" />
              <BiStar className="text-neutral-600" />
              <BiStar className="text-neutral-600" />
              <BiStar className="text-neutral-600" />
            </div>
            <span className="bg-neutral-900 text-white w-52 text-center h-12 py-3 rounded-md font-light">Sua avaliação: 0</span>
          </div>
          {/* Genero */}
          <span className="font-light text-sm tracking-wider" style={{ wordSpacing: "1.7rem" }}>{info.info["categoria"]}</span>

        </div>
      </section>
      {/* Line */}
      <span className="border-b-[1px] border-neutral-900"></span>
      {/* Snopse */}
      <section className="flex flex-col gap-3">
        <h3 className="text-2xl " >Sinopse</h3>
        <span className="text-sm font-extralight text-neutral-400" >{info.info['sinopse']}</span>
      </section>
    </section>
  )
}