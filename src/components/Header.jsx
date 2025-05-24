import { Bell, Plus, Search } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <span className="header-logo-text-blue">Health </span>
        <span className="header-logo-text">care.</span>
      </div>
      <div className="header-search-bell">
        <div className="header-search-input-group">
          <Search className="min-w-5" />
          <input
            type="text"
            placeholder="Search"
            className="header-search-input"
          />
        </div>
        <Bell className="header-bell" />
      </div>
      <div className="header-profile">
        <img
          src="./avatar.png"
          alt="profile-picture"
          className="header-avatar"
        />
        <Plus className="header-plus" />
      </div>
    </div>
  );
};

export default Header;
