"use client"
import Image from "next/image";
import EmersonMarins3x4 from "/public/EmersonMarins3x4.png";

function showMessage() {
  console.log('clicou na imagem')
}

export default function UserImage() {
  return (
    <div className="" onClick={showMessage}>
      <Image src={EmersonMarins3x4} alt="imagem do usuário"
        className="w-10 h-10 rounded-full object-cover object-center cursor-pointer"
      />
    </div>
  )
}