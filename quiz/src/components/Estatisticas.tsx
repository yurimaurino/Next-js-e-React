import styles from '../styles/Estatisticas.module.css'

interface EstatisticaProps {
  valor: any
  texto: string
  corFundo?: string
  corFonte?: string
}

export default function Estatisticas(props: EstatisticaProps) {
  return (
    <div className={styles.estatisticas}>
      <div className={styles.valor} style={{
        backgroundColor: props.corFundo ?? '#FDD60F',
        color: props.corFonte ?? '#333'
      }}>
        {props.valor}
      </div>
      <div className={styles.texto}>
        {props.texto}
      </div>
    </div>
  )
}