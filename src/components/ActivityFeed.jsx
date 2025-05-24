import "../styles/ActivityFeed.css";
import barSets from "../data/activityBarSets.js";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

export default function ActivityFeed() {
  return (
    <div className="activity-feed-container" id="Statistics">
      <div className="activity-feed-header">
        <h3 className="activity-feed-title">Activity</h3>
        <span className="activity-feed-subtitle">
          3 appointments on this week
        </span>
      </div>

      <div className="activity-feed-bar-chart">
        <div className="activity-feed-bar-row">
          {barSets.map((bars, idx) => (
            <div key={idx} className="activity-feed-bar-group">
              {/* bars */}
              <div className="activity-feed-bars">
                {bars.map((cls, i) => (
                  <span
                    key={i}
                    className={`${cls} w-1 rounded-full`}
                  />
                ))}
              </div>
              <div className={`activity-feed-day-label${idx === 0 ? " active" : ""}`}>
                {days[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
