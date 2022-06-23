import React from 'react'

const Items = ({items, loading}) => {
    if (loading) {
        return <h2>Cargando...</h2>
    }

    return <ul className='List-group mb-4'>

    </ul>

}

export default Items; 
