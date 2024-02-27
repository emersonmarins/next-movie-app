"use client"
import { useState } from "react";
import NameUser from "./components/fieldNameUser";
import PassUser from "./components/fieldPassUser";
import ButtonLogin from "./components/btnLogin";
import FooterForm from "./components/footerForm";
import HeaderForm from "./components/header";
import * as Yup from 'yup';
import { BiXCircle } from "react-icons/bi";
interface Props {
  setLoggedInUser: (value: boolean) => void,
  setLoginUser: (value: boolean) => void,
}


export default function LoginModal({ setLoggedInUser, setLoginUser }: Props) {
  const [showInfoRecaptcha, setShowInfoRecaptcha] = useState(false);
  const [errorUserEmail, setErrorUserEmail] = useState(false);
  const [errorUserPass, setErrorUserPass] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("errorEmail").required('errorEmail'),
    password: Yup.string().min(4, 'errorPass').max(60, 'errorPass').required('errorPass'),
  });
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get('userLoginId');
    const password = formData.get('password');

    try {
      await validationSchema.validate({ email: username, password: password }, { abortEarly: false });

      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.confirmation) {
          setLoggedInUser(true);
          setLoginUser(false);
        } else {
          setErrorLogin(true);
        }
        console.log('entrou ok');
        console.log(data);
        // setLoginUser(false);
      } else {
        // Lidar com erros na resposta da API
        console.error('Erro ao enviar dados para a API');
      }
    } catch (error: any) {
      // Lidar com os erros de validação
      console.log(error.errors);

      if (error.errors.length > 1) {
        setErrorUserEmail(true);
        setErrorUserPass(true);
      } else {
        error.errors[0] === 'errorPass' ? (setErrorUserPass(true), setErrorUserEmail(false)) : (setErrorUserEmail(true), setErrorUserPass(false));
      }

    }
  };

  return (
    <div className="flex justify-center max-w-[450px] m-auto w-screen">
      <div className="flex flex-col min-h-[700px] w-full py-12 px-16 bg-[rgba(0,0,0,0.7)] rounded-md">
        <HeaderForm />
        <form className="flex flex-col flex-grow gap-4" aria-label="Entrar" onSubmit={(e) => handleSubmit(e)}>
          {errorLogin && (
            <span className="flex items-center text-xs gap-1 font-bold text-red-700">
              <BiXCircle />
              Email/Senha inválidos tente novamente!
            </span>
          )}
          <NameUser errorUserEmail={errorUserEmail} />
          <PassUser errorUserPass={errorUserPass} />
          <ButtonLogin handleSubmit={handleSubmit} />
          <a className="text-center font-light hover:text-neutral-400 hover:underline" href="/LoginHelp">Esqueceu a senha?</a>
        </form>
        <FooterForm showInfoRecaptcha={showInfoRecaptcha} setShowInfoRecaptcha={setShowInfoRecaptcha} />
      </div>
    </div>

  );
}


