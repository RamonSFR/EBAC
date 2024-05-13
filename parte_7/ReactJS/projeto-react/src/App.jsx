function App() {
  const nome = 'Ramon Sávio';

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: 'Maria',
  }

  let estaDeDia = false;

  return (
    <>
      <h1>Olá, {pessoa.nome} </h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa Tarde'}
    </>
  )
}

export default App
