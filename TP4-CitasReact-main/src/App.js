import './App.css';
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import Form from "./components/Form";
import AppointmentList from "./components/AppointmentList";
import React, { useState } from "react";
function App() {
  const [appointments, setAppointments] = useState([]);
  const AddAppointment = (newAppointment) => {
    setAppointments(
      [
        ...appointments,
        newAppointment,
      ]
    );
  }
  const DeleteAppointment = (idDelete) => {
    let newArr = appointments;
    newArr = newArr.filter(objeto => objeto.id !== idDelete);
    setAppointments(newArr)
  }
  return (
    <>
      <Title name="Administrador de Pacientes" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <SubTitle name="Crear mi Cita" />
            <Form onCreateAppointment={AddAppointment} />
          </div>        
          <div className="one-half column">
            <SubTitle name="Administra tus Citas" />
            <AppointmentList list={appointments} onDeleteAppointment={DeleteAppointment} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
