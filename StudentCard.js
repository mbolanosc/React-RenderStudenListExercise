import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const StudentListCard = ({ list }) => {
    return (
        <>
            {list.map(user => (
                <Card key={user.edad} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Datos del estudiante</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Nombre: {user.nombre}</ListGroup.Item>
                        <ListGroup.Item>Apellido: {user.apellido}</ListGroup.Item>
                        <ListGroup.Item>Edad: {user.edad}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </>
    )
}
