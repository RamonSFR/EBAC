/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './perfil.css';

const Perfil = ({ endereco, nome }) => {
    return (
        <div>
            <img className='perfil-avatar' src={endereco} alt="Avatar"/>
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

export default Perfil;