import { useState } from "react";

const Formulario = () => {
    let [ materiaA, setMateriaA ] = useState(0);
    let [ materiaB, setMateriaB ] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState(0);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }
    
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p>Olá { nome }, você foi Aprovado</p>
        } else {
            return <p>Olá { nome }, você foi Reprovado</p>
        }
    }

    return (
        <form>
            <input type="text" placeholder="seu nome" onChange={alteraNome} /> <br />
            
            <input onChange={evento => setMateriaA(parseInt(evento.target.value))} type="number" placeholder="Nota Matéria A"/>
            <input onChange={({target}) => setMateriaB(parseInt(target.value))} type="number" placeholder="Nota Matéria B"/>
            <input onChange={evento => setMateriaC(parseInt(evento.target.value))} type="number" placeholder="Nota Matéria C" />
            { renderizaResultado() }
            {materiaA}
            {materiaB}
            {materiaC}
        </form>
    )
}

export default Formulario;