import { Card, LinkBotao } from './styles'

import Paragraph from '../Paragraph'
import Title from '../Title'

const Project = () => {
  return (
    <Card>
      <Title>Projeto lista de tarefas</Title>
      <Paragraph tipo="secundario">Lista de tarefas com VueJS</Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Project
