import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState('')

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp])
    setTarefaTemp('')
  }

  return ( 
    <div>
      <input data-testid="campo-tarefa" type="text" value={tarefaTemp} onChange={event => setTarefaTemp(event.target.value)}/>
      <button data-testid="btn-cadastrar" onClick={cadastrarTarefa} type="button">Cadastrar</button>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
