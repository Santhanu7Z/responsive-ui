import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Typography } from '@mui/material';
import {
  faChartBar,
  faGift,
  faPlus,
  faQuestionCircle,
  faLifeRing,
  faPowerOff, // Use the power button icon for logout
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
  };
  return (
    <div className='sidebar-container'>
        <div className="profile-section">
        <Avatar className="profile-avatar" alt="Profile Avatar" src="cat.jpg" sx={{ width: 60, height: 60 }} />
        <div className="profile-info">
        <Typography variant="h6" className="profile-name">
  Ram Mohan
  <span style={{ color: '#056DC1', marginLeft: '5px' }}>&#9654;</span>
</Typography>


  <Typography variant="body2" className="profile-email">
    rammohan2@gmail.com
  </Typography>
</div>
      </div>
      <div className="sidebar-items">
        <div
          className={`sidebar-item ${selectedItem === 'Dashboard' ? 'selected' : ''}`}
          onClick={() => handleItemClick('Dashboard')}
        >
          <FontAwesomeIcon icon={faChartBar} /> Dashboard
        </div>
        <div
          className={`sidebar-item ${selectedItem === 'Perks' ? 'selected' : ''}`}
          onClick={() => handleItemClick('Perks')}
        >
          <FontAwesomeIcon icon={faGift} /> Perks
        </div>
        <div
          className={`sidebar-item ${selectedItem === 'Addons' ? 'selected' : ''}`}
          onClick={() => handleItemClick('Addons')}
        >
          <FontAwesomeIcon icon={faPlus} /> Addons
        </div>
        <div
          className={`sidebar-item ${selectedItem === 'FAQ' ? 'selected' : ''}`}
          onClick={() => handleItemClick('FAQ')}
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
        </div>
        <div
          className={`sidebar-item ${selectedItem === 'Support' ? 'selected' : ''}`}
          onClick={() => handleItemClick('Support')}
        >
          <FontAwesomeIcon icon={faLifeRing} /> Support
        </div>
      </div>
      <div className="logout-button" onClick={handleLogout}>
        <span className="logout-text">Logout</span> <FontAwesomeIcon icon={faPowerOff} />
      </div>
    </div>
  );
};

export default Sidebar;
