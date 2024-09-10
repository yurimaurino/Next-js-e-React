import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextType {
  tema?: string 
  alternarTema?: () => void
}

const AppContext = createContext<AppContextType>({})

export function AppProvider(props: any) {
  const [tema, setTema] = useState('dark')

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : ''
    setTema(novoTema)
    localStorage.setItem('tema', novoTema)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    setTema(temaSalvo)
  }, [])

  return (
    <AppContext.Provider value={{
      tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext