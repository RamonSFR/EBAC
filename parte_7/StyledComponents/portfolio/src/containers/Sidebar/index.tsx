import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { Descricao } from './styles'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Avatar />
      <Title fontSize={20}>Ramon Sávio</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        @RamonSFR
      </Paragraph>
      <Descricao fontSize={12}>Engenheiro front-end</Descricao>
      <button>Trocar Tema</button>
    </aside>
  )
}

export default Sidebar
