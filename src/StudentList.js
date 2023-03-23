import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const StudentList = ({ list }) => {
    return (
        <>
            {list.map(item => (
                <Card key={item} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Datos del estudiante</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Nombre: {item.nombre}</ListGroup.Item>
                        <ListGroup.Item>Apellido: {item.apellido}</ListGroup.Item>
                        <ListGroup.Item>Edad: {item.edad}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </>
    )
}
