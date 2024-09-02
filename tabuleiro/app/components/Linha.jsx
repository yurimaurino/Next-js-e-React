import styles from './Linha.module.css'
import SubDivisao from "./SubDivisao";

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <SubDivisao preta={props.preta}/>
      <SubDivisao preta={!props.preta}/>
      <SubDivisao preta={props.preta}/>
      <SubDivisao preta={!props.preta}/>
      <SubDivisao preta={props.preta}/>
      <SubDivisao preta={!props.preta}/>
      <SubDivisao preta={props.preta}/>
      <SubDivisao preta={!props.preta}/>
    </div>
  )
}