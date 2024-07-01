import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  function trocaTema() {
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider theme={isDark ? temaDark : temaLight}>
      <EstiloGlobal />

      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
