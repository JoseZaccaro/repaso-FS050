import React from 'react'
import './listaDesordenada.css'
import { Link } from 'react-router-dom'

const ListaDesordenada = (props) => {
    // console.log(props);
    return (
        <ul className={props.clases || 'p-4 border border-black'}>
            {
                props.nombres?.map((nombre, indice) => (
                    <React.Fragment key={nombre.name}>
                        <li>
                            <Link to={`/lista/${nombre.name}`}>
                                Nombre del mentor: {nombre.name}
                            </Link>
                        </li>
                        <li className={nombre.mentor ? 'text-amber-500 font-bold' : 'text-red-400'}> es Mentor: {nombre.mentor ? 'Es mentor' : 'No lo es'}</li>
                    </React.Fragment>
                ))
            }
            
        </ul>
    )
}

export default ListaDesordenada