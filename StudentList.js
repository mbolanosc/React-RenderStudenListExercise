import React from 'react'

export const StudentList = ({ list }) => {
    return (
        <>
            {list.map(item => (
               <ol key={item} >
                <p>Datos del estudiante</p>
                <li>Nombre: {item.nombre}</li>
                <li>Apellido: {item.apellido}</li>
                <li>Edad: {item.edad}</li>
             </ol>
            ))}
        </>
    )
}


