import { useState } from 'react';
import Perfil from './components/Perfil'
import ReposList from './components/ReposList';
// import Formulario from './components/Formulario'
// import { useState } from 'react'

function App() {
  // const [formularioVisivel, setFormularioVisivel] = useState(true);

  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      
      {/* {formularioVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
