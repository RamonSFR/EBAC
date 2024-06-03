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
                {/* {repos.map(repositorio => ( */}
                {repos.map(({id, name, language, html_url}) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a href={html_url}>Visitar no Github</a>
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </>
    )
}

export default ReposList;