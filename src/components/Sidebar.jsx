import { ArrowDownUp, CalendarDays, MessageCircleMore, Phone, Plus, TrendingUp, Settings, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import {Link} from 'react-scroll'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { type: 'heading', label: 'General' },
    { icon: <img src="./dashboard.png" alt="Dashboard" className='h-8 w-8 rounded-lg' />, label: 'Dashboard', specialImage: true },
    { icon: <ArrowDownUp />, label: 'History' },
    { icon: <CalendarDays />, label: 'Calendar' },
    { icon: <Plus className="bg-gray-400 rounded text-black p-1 h-5 w-5" />, label: 'Appointments' },
    { icon: <div className='bg-black rounded-md w-5 h-5 flex items-center justify-center'><TrendingUp className='text-white w-4 h-4'/></div>, label: 'Statistics', specialDivIcon: true },
    { type: 'heading', label: 'Tools' },
    { icon: <MessageCircleMore />, label: 'Chat' },
    { icon: <Phone className='fill-current' />, label: 'Support' },
  ];

  return (
    <>
      <button
        aria-label="Open sidebar"
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-100 text-blue-700 rounded-md shadow-lg"
      >
        <Menu size={24} />
      </button>

      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      
      <div
        className={`sidebar ${isSidebarOpen ? 'open' : 'closed'} md:open`}
      >
        
        <div className="sidebar-content">
        
          <button
            aria-label="Close sidebar"
            onClick={toggleSidebar}
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          
          
          <div className="md:hidden text-xl font-bold text-blue-700 mb-4 self-center">
            <span className="header-logo-text-blue">Health </span>
        <span className="header-logo-text">care.</span>
          </div>


          {sidebarItems.map((item, index) =>
            item.type === 'heading' ? (
              <h3 key={index} className="sidebar-heading">
                {item.label}
              </h3>
            ) : (
              <Link
              to={item.label}
              onClick={()=> setIsSidebarOpen(false)}
              >
              <div
                key={index}
                className={`sidebar-item${item.label === 'Dashboard' ? ' active' : ''}`}
              >
                {item.icon}
                <p className="text-sm">{item.label}</p>
              </div>
              </Link>
            )
          )}
        </div>

        
        <div className="sidebar-setting">
          <Settings className="w-5 h-5" />
          <p className="text-sm">Setting</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;