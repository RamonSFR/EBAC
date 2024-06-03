import Perfil from './components/Perfil'
import ReposList from './components/ReposList';
// import Formulario from './components/Formulario'
// import { useState } from 'react'

function App() {
  // const [formularioVisivel, setFormularioVisivel] = useState(true);
  return (
    <>
      <Perfil nome="Ramon" endereco="https://github.com/RamonSFR.png" />
      <ReposList />
      
      {/* {formularioVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
