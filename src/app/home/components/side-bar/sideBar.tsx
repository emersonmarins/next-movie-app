import {
  BiHome, 
  BiBowlHot, 
  BiCompass, 
  BiCameraMovie, 
  BiCalendarStar,
  BiCalendar
} from "react-icons/bi"

type UpdateStateFunction = (newState: boolean) => void;

interface CarouselPostInstaProps {
  updateState: UpdateStateFunction;
}

export default function SideBar({ updateState }: CarouselPostInstaProps) {
  const handleClick = (value: boolean) => {
    updateState(value) ;
  }
  
  return (
    
    <div className="flex flex-col gap-8  fixed top-1/2 left-5 -translate-y-1/2">
      <a href="#" className="flex flex-col items-center text-zinc-400 font-light text-base" 
        onClick={() => { handleClick(false) }}
      >
        <BiHome className="h-auto w-6 text-zinc-100"/>
        <span className="navbar__link__title" >Home</span>
      </a>
      <a href="#" className="navbar__link">
        <BiBowlHot className="h-auto w-6 text-zinc-100"/>
        <span className="navbar__link__title">Tendencia</span>
      </a>
      <a href="#" className="navbar__link">
        <BiCompass className="h-auto w-6 text-zinc-100"/>
        <span className="navbar__link__title">Explorar</span>
      </a>
      <a href="#" className="navbar__link">
        <BiCameraMovie className="h-auto w-6 text-zinc-100"/>
        <span className="navbar__link__title">Filmes</span>
      </a>
      <a href="#" className="navbar__link">
        <BiCalendarStar className="h-auto w-6 text-zinc-100"/>
        <span className="navbar__link__title">Favoritos</span>
      </a>
    </div>
  )
}