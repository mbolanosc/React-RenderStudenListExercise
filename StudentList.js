import React from 'react'

export const StudentList = ({ list }) => {
    return (
        <>
            {list.map(user => (
               <ol key={user.edad}>
                <p>Datos del estudiante</p>
                <li>Nombre: {user.nombre}</li>
                <li>Apellido: {user.apellido}</li>
                <li>Edad: {user.edad}</li>
             </ol>
            ))}
        </>
    )
}


