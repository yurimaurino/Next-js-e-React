import styles from '../styles/Questionario.module.css'
import QuestaoModel from "../model/questao"
import Questao from './Questao'
import Botao from './Botao'

interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irParaOProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

  function respostaFornecida(indice: number) {
    if(props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ?
        <Questao
          valor={props.questao}
          tempoParaResposta={15}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irParaOProximoPasso} />
        : false
      }

      <Botao onClick={props.irParaOProximoPasso}
        texto={props.ultima ? 'Finalizar' : 'Próxima Questão'}
      />
    </div>
  )
}