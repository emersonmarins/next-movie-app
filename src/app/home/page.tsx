"use client"
import Image from "next/image";
import Header from "./components/header/header";
import SideBar from "./components/side-bar/sideBar";
import Banner from "./components/banner/banner";
import Category from "./components/category/category";
import Carousel from "./components/carousel/carousel";
import { FunctionComponent, SetStateAction, useState } from "react";
import PlayFilme from "./components/play-filme/playFilme";
import Footer from "./components/footer/footer";
import LoginModal from "./components/login/loginModal";



export default function Home() {
  const [state, setState] = useState(false);
  const [infoFilme, setInfoFilme] = useState({value:'test'});
  const [loginUser, setLoginUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);

  const updateState = (newState: any) => {
    setState(newState);
  }
  const insertInfoFilme = (newState: any) => {
    setInfoFilme(newState);
  }
  return (
    <>
      <Header loginUser={loginUser} setLoginUser={setLoginUser} loggedInUser={loggedInUser} />
      <SideBar updateState={updateState} />
      <div className="flex flex-col gap-10 relative top-20 left-[121px] w-[calc(100%_-_200px)]">
        {state ? (
            <PlayFilme info={infoFilme}/>
        ) : (
          <>
            <Banner />
            <Category genero={"aventura"} />
            <Carousel updateState={updateState} insertInfoFilme={insertInfoFilme} />
            <Category genero={"ficcão científica"} />
            <Carousel updateState={updateState} insertInfoFilme={insertInfoFilme} />
          </>
        )}
        <Footer/>
      </div>
      {loginUser && <div className="absolute top-10 left-1/2 translate-x-[-50%] z-50"><LoginModal setLoggedInUser={setLoggedInUser} setLoginUser={setLoginUser}/></div>}
    </>
  );
}
