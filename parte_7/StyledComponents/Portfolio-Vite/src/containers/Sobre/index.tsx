import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        consectetur architecto optio eum aut temporibus quos expedita accusamus,
        recusandae autem, error libero itaque, perferendis asperiores rerum
        quibusdam quisquam odio accusantium?
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=RamonSFR&show_icons=true&count_private=true&theme=dracula" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RamonSFR&layout=compact&langs_count=7&theme=synthwave" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
