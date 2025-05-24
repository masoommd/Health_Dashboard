import "../styles/HealthStatusCards.css";
import healthStatusCardsData from "../data/healthStatusCardsData";

export default function HealthStatusCards() {
  return (
    <div className="health-status-cards-container">
      <div className="health-status-cards-select-row">
        <select className="health-status-cards-select">
          <option value="This Week">This Week</option>
        </select>
      </div>

      {healthStatusCardsData.map((item, idx) => (
        <div key={idx} className="health-status-card">
          <div className="health-status-card-row">
            <span className="health-status-card-icon">{item.icon}</span>
            <div>
              <h3 className="health-status-card-title">{item.title}</h3>
              <p className="health-status-card-date">Date: {item.date}</p>
            </div>
          </div>
          <div className="health-status-card-progress-bg">
            <div
              className={`health-status-card-progress-bar ${item.color} ${item.progress}`}
            ></div>
          </div>
        </div>
      ))}

      <div className="health-status-cards-details-row">
        <a href="#">Details →</a>
      </div>
    </div>
  );
}
