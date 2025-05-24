import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import DashboardMainContent from './components/DashboardMainContent.jsx'
import Calendar from './components/Calendar.jsx'

function App() {
  return (
    <div className="bg-blue-100 min-h-screen w-full p-2 md:p-4">
      <div className="bg-white min-h-screen w-full rounded-4xl p-2 md:p-4 flex flex-col ">
        <Header />
        <div className="flex flex-col md:flex-row w-full gap-4 ">
          {/* Sidebar */}
          <div className="flex-shrink-0">
            <Sidebar />
          </div>
          
          <div className="flex flex-col md:flex-row flex-grow gap-4">
            <div className="flex-grow flex flex-col">
              <DashboardMainContent />
            </div>
            <div className="flex-shrink-0">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
