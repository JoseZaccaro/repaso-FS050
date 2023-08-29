import React, { useState } from 'react'

const Contador = () => {
    let [count, setCount] = useState(0)
    const funcionClick = (e) => {
        setCount(count + 1)
        // console.log("dentro", count)
    }
    return (
        <>
            <p className='text-black text-xl'>Contador: <span className='font-bold text-red-500'>{count}</span> </p>
            <button onClick={funcionClick} className='p-2 border-black border rounded-sm bg-slate-500' >Sumar</button>
        </>
    )
}

export default Contador