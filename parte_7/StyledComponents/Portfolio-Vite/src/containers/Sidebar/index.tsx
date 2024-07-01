import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

const Sidebar = () => {
  return (
    <aside>
      <Avatar />
      <Titulo fontSize={20}>Ramon Sávio</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>@RamonSFR</Paragrafo>
    </aside>
  )
}

export default Sidebar
