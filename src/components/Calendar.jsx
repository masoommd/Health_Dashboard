import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import '../styles/Calendar.css'

const Calender = () => {
  return (
    <div className="calendar-container" id='Calendar'>
      <CalendarView />
      <UpcomingSchedule />
    </div>
  )
}

export default Calender