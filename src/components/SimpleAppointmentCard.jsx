
import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card" id="Appointments">
      <div>
        <div className="simple-appointment-card-title">{title}</div>
        <div className="simple-appointment-card-time">{time}</div>
      </div>
      <div className="simple-appointment-card-icon">{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
