
import SimpleAppointmentCard from "./SimpleAppointmentCard.jsx";
import "../styles/UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="upcoming-schedule-title">The Upcoming Schedule</h2>

      
      <div className="upcoming-schedule-section">
        <p className="upcoming-schedule-section-label">On Thursday</p>
        <div className="upcoming-schedule-cards-row">
          <SimpleAppointmentCard
            title="Health checkup complete"
            time="11:00 AM"
            icon="🩺"
          />
          <SimpleAppointmentCard
            title="Ophthalmologist"
            time="14:00 PM"
            icon="👁️"
          />
        </div>
      </div>

     
      <div className="upcoming-schedule-section">
        <p className="upcoming-schedule-section-label">On Saturday</p>
        <div className="upcoming-schedule-cards-row">
          <SimpleAppointmentCard
            title="Cardiologist"
            time="12:00 AM"
            icon="❤️"
          />
          <SimpleAppointmentCard
            title="Neurologist"
            time="16:00 PM"
            icon="🧑‍⚕️"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
