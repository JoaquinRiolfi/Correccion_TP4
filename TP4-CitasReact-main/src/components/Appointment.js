import React from 'react'

export default function Appointment({obj, index, onDeleteAppointment}) {
    const save = (id) =>{
        onDeleteAppointment(id)
    }
return (
    <div className="cita" key={index}>
        <p>Pet: <span>{obj.Pet}</span>
        </p>
        <p>Owner: <span>{obj.Owner}</span>
        </p>
        <p>Date: <span>{obj.Date}</span>
        </p>
        <p>Time: <span>{obj.Time}</span>
        </p>
        <p>Symptoms: <span>{obj.Symptoms}</span>
        </p>
        <button className="button eliminar u-full-width " onClick={() => save(obj.id)}>Erase X</button>
    </div>
)
}