import NumeroDisplay from "@/components/NumeroDisplay"
import { mega } from "@/functions/mega"
import { useEffect, useState } from "react"

export default function MegaSena() {

  const [qtde, setQtde] = useState(6)
  const [numeros, setNumeros] = useState([])
  
  useEffect(() => {
    setNumeros(mega())
  }, [])

  function renderNumeros(){
    return numeros.map(n => <NumeroDisplay key={n} numero={n}/>)
  }
  
  return (
    <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center'} } >
      <h1>Mega Sena</h1>
      <div style={ {display: 'flex', flexWrap: 'wrap', justifyContent: 'center'} }>
        {renderNumeros()}
      </div>
      <div>
        <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)} />
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  )
} 