import { useEffect, useState } from "react";
import './ReposList.css'

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estacarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/RamonSFR/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);

                setRepos(resJson);
            }, 3000)
        })
    }, []);

    return (
        <>
            {estacarregando && (
                <h1>Carregando...</h1>
            )}
            <ul>
                {repos.map(repositorio => (
                    <li key={repositorio.id}>
                        <b>Nome:</b> {repositorio.name} <br />
                        <b>Linguagem:</b> {repositorio.language} <br />
                        <a href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </>
    )
}

export default ReposList;