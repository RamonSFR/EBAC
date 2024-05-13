import './perfil.css';

const Perfil = () => {
    const usuario = {
        nome: 'Ramon Sávio',
        avatar: 'https://github.com/RamonSFR.png'
    }
    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} alt="Avatar"/>
            <h3 className='perfil-titulo'>{ usuario.nome }</h3>
        </div>
    )
}

export default Perfil;