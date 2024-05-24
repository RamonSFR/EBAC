import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import { useState } from 'react'

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  return (
    <>
      <Perfil nome="Ramon" endereco="https://github.com/RamonSFR.png" />
      {formularioVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle Form</button>
    </>
  )
}

export default App
