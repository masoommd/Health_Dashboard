import AnatomySection from './AnatomySection.jsx'
import HealthStatusCard from './HealthStatusCards.jsx'
import '../styles/DashboardOverview.css'

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview-outer">
      <div className="dashboard-overview-inner">
        <AnatomySection />
        <HealthStatusCard />
      </div>
    </div>
  )
}

export default DashboardOverview