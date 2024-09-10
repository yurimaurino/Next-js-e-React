import AuthInput from "../components/auth/AuthInput";
import { WarningIcon } from "../components/icons";
import { useState } from "react";
import useAuth from "../data/hook/useAuth";
import Image from "next/image";

export default function Autenticacao() {

  const { cadastrar, login, loginGoogle} = useAuth()

  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  function exibirErro(msg: any, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  async function submit() {
    try {
      if (modo === 'login') {
        await login(email, senha)
      } else {
        await cadastrar(email, senha)
      }
    } catch(e) {
      exibirErro(e?.message ?? 'Erro Desconhecido')
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <Image
          src="https://picsum.photos/600/600?random"
          width={600}
          height={600}
          alt="Imagem  da Tela de Autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className={`m-10 md:w-1/2 lg:w-1/3`}>
        <h1 className={`
        flex justify-center
        text-2xl font-semibold mb-5
      `}>
          {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>
          {erro ? (
          <div className={`
            flex items-center 
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {WarningIcon}
            <span className="ml-3">{erro}</span>
          </div>
          ) : false}

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />

        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button onClick={submit} className={`
        w-full bg-indigo-500 hover:bg-indigo-400
        text-white rounded-lg px-4 py-3 mt-6
      `}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className={`my-6 border-gray-300 w-full`} />

        <button onClick={loginGoogle} className={`
        w-full bg-red-500 hover:bg-red-400
        text-white rounded-lg px-4 py-3
      `}>
          Entrar com o Google
        </button>

        {modo === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a onClick={() => setModo('cadastro')} className={`
              text-blue-500 hover:text-blue-700 font-semibold 
              cursor-pointer
            `}> Criar uma conta gratuitamente </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a onClick={() => setModo('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold 
              cursor-pointer
            `}> Entre com a suas Credenciais </a>
          </p>
        )}
      </div>
    </div>
  )
}