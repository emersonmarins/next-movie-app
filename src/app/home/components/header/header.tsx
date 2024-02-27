import { Dispatch, SetStateAction } from "react";
import FieldSearch from "../elements/fieldSearch";
import UserImage from "../elements/userImage";
import logo from "/public/logo.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaArrowRightFromBracket } from "react-icons/fa6";

interface Props {
  loginUser: boolean,
  setLoginUser: Dispatch<SetStateAction<boolean>>,
  loggedInUser: boolean,
}

export default function Header({ loginUser, setLoginUser, loggedInUser }: Props) {
  return (
    <header className="flex justify-between items-center gap-5 p-5 fixed w-full bg-[var(--body-color)] z-50">
      <Image src={logo} alt={"logo Marins Movies"}
        className="w-40"
      />
      <div className="flex gap-5 items-center">
        <FieldSearch />
        {!loggedInUser ? (
          <FaArrowRightFromBracket className="text-2xl cursor-pointer" onClick={() => setLoginUser(true)}/>
        ) : (
          <UserImage />
        )}

      </div>
    </header>
  )
}