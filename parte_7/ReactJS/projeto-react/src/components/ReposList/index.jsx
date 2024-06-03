import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/RamonSFR/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, []);

    return (
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio}>
                    <b>Nome:</b> {repositorio.name} <br />
                    <b>Linguagem:</b> {repositorio.language}
                    <a href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    )
}

export default ReposList;