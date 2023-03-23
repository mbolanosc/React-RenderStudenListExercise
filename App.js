import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { StudentListCard } from './StudentCard';
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
    <h2>Cards</h2>
    <hr></hr>
      <Container fluid="lg">
        <Row>
          <StudentListCard list={arrayEstudiantes} ></StudentListCard>
        </Row>
        <br></br>
        <h2>List</h2>
        <hr></hr> 
        <StudentList list={arrayEstudiantes}></StudentList>
      </Container>
    </>
  );
}

export default App;