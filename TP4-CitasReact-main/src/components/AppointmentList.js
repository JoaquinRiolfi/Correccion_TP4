import Appointment from "./Appointment";
export default function AppointmentList({ list, onDeleteAppointment }) {
return (
<>
{list.map((item, index) => (
    <>
        <Appointment obj = {item} key = {index} onDeleteAppointment={onDeleteAppointment}/>
    </>
))}
</>
)
}