import Title from '../../components/Title'
import { Avatar } from './styles'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Avatar src="https://github.com/RamonSFR.png" alt="Avatar" />
      <Title fontSize={20}>Ramon Sávio</Title>
    </aside>
  )
}

export default Sidebar
