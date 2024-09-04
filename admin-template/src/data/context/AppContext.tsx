import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextType {
  tema?: Tema 
  alternarTema?: () => void
}

const AppContext = createContext<AppContextType>({})

export function AppProvider(props: any) {
  const [tema, setTema] = useState<Tema>('dark')

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '')
  }

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