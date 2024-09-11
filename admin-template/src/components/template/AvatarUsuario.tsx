import Link from "next/link";
import useAuth from "../../data/hook/useAuth";
import Image from "next/image";

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()
  return (
    <Link href={'/perfil'}>
      <Image
        width={0}
        height={0}
        unoptimized
        src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
        alt="Avatar do Usuário" 
        className={`
          h-10 w-10 rounded-full cursor-pointer
          ${props.className}  
        `}
      />
    </Link>
  )
}