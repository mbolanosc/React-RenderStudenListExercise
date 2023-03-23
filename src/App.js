import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { StudentList } from './StudentList';


const arrayEstudiantes = [
  {
    nombre: "José",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
  },
  {
    nombre: "Luis",
    apellido: "Pérez",
    edad: 22,
  },
  {
    nombre: "Cristian",
    apellido: "Pérez",
    edad: 23,
  },
  {
    nombre: "Fiorella",
    apellido: "Pérez",
    edad: 24,
  },
  {
    nombre: "Yensy",
    apellido: "Pérez",
    edad: 25,
  },
];

function App() {
  return (
    <>
      <Container fluid="lg">
        <Row>
          <StudentList list={arrayEstudiantes} ></StudentList>
        </Row>
      </Container>
    </>
  );
}

export default App;