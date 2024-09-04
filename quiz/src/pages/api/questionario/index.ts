import { Embaralhar } from "../../../functions/arrays"
import questoes from "../bancoDeQuestoes"

const Embaralhamento = (req, res ) => {
  const ids = questoes.map(questao => questao.id)
  res.status(200).json(Embaralhar(ids))
}

export default Embaralhamento