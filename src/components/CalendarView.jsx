import "../styles/CalendarView.css";
import { calendarData, cards } from "../data/calendarData.js";

export default function CalendarView() {
  return (
    <div className="calendar-view-container">
      <header className="calendar-view-header">
        <h2 className="calendar-view-title">October 2021</h2>
        <div className="space-x-2">
          <button className="p-1 rounded hover:bg-indigo-100">&#8592;</button>
          <button className="p-1 rounded hover:bg-indigo-100">&#8594;</button>
        </div>
      </header>

      <section className="calendar-view-grid">
        {calendarData.map(({ day, date, times, selected, isDimmed }) => (
          <div
            key={date}
            className={
              "calendar-view-day-card" +
              (date === "26" ? " selected" : "") +
              (isDimmed ? " dimmed" : "")
            }
          >
            <div className="calendar-view-day-label">
              <div>{day}</div>
              <div className="calendar-view-date">{date}</div>
            </div>

            <div className="calendar-view-times">
              {times.map((time) => (
                <div
                  key={time}
                  className={
                    "calendar-view-time" +
                    (time === selected ? " selected" : "")
                  }
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="calendar-view-cards">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`calendar-view-card ${card.bg} ${card.text}`}
          >
            <div className="calendar-view-card-header">
              <span>{card.title}</span>
              <span className="calendar-view-card-icon">{card.icon}</span>
            </div>
            <div className="calendar-view-card-body">
              <p className="calendar-view-card-time">{card.timeRange}</p>
              <p className="calendar-view-card-doctor">{card.doctor}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
