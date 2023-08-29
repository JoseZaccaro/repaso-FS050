import React, { useEffect, useState } from 'react'
import ListaDesordenada from '../components/ListaDesordenada.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const url = axios.create({
    baseURL:'https://rickandmortyapi.com/api'
})
const initialState =
    [
        { name: 'Jose', mentor: false },
        { name: 'Lucas', mentor: false },
        { name: 'Kevin', mentor: true },
        { name: 'Fede', mentor: true },
        { name: 'Nico', mentor: true }
    ]

const ListadoDeMentores = ({ count }) => {
    const [mentores, setMentores] = useState(initialState)
    const { valor } = useParams()
    const navigate = useNavigate()
    // console.log("listado de mentores",props)
    if (valor) {
        console.log(mentores.find(mentor => mentor.name.toLowerCase().includes(valor.toLowerCase())))
    }
    useEffect(() => {
        console.log('me monte LM');

        url.get('/character')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        
        return () => {
            console.log('me desmonte LM');
        }
    }, [])

    useEffect(() => {
        console.log('me actualice LM');
    }, [count])

    if (mentores.length === 0) {
        return (
            <div className='w-screen min-h-screen bg-blue-300 pt-40 flex justify-center items-start gap-4'>
                <h1 className='text-4xl text-red-500'> Lo sentimos no hay mentores...</h1>
            </div>
        )
    }

    return (
        <div className='w-screen min-h-screen bg-blue-300 pt-40 flex justify-center items-start gap-4'>
            <ListaDesordenada nombres={mentores} />
        </div>
    )

}

export default ListadoDeMentores