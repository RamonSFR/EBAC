import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Ramon Sávio</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          @RamonSFR
        </Paragrafo>
        <Descricao fontSize={12} tipo="principal">
          Engenheiro Front-end
        </Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
