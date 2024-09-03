import { AdjustmentsIcon, BellIcon, HomeIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return(
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={HomeIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={AdjustmentsIcon} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={BellIcon} />        
      </ul>
    </aside>
  )
}