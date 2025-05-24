import DashboardOverview from './DashboardOverview.jsx'
import ActivityFeed from './ActivityFeed.jsx'
import '../styles/DashboardMainContent.css'

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <DashboardOverview />
      <ActivityFeed />
    </div>
  )
}

export default DashboardMainContent