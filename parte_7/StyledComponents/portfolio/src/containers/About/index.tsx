import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSecao } from './styles'

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus
        consectetur non ab accusantium similique iste quo? Blanditiis
        praesentium rerum voluptate. Reprehenderit corporis distinctio provident
        dolorum voluptate nobis quo. Perferendis?
      </Paragraph>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=RamonSFR&show_icons=true&count_private=true&theme=dracula" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RamonSFR&layout=compact&langs_count=7&theme=synthwave" />
      </GithubSecao>
    </section>
  )
}

export default About
