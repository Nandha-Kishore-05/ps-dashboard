import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import PersonIcon from '@mui/icons-material/Person';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';
import {  Avatar, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Typography from '@mui/material/Typography';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => setProfileOpen(false);

  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">DASHBOARD</h3>
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn" onClick={handleOpen}>
            <img src={ iconsImgs.bell } style ={{marginRight : 10}}/>
            </button>
            <button className="notification-btn content-top-btn" onClick={handleProfileOpen}>
            <PersonIcon sx={{ color: 'grey', fontSize: 30 ,gap:10,marginRight : 8}}/>
                <span className="notification-btn-dot"></span>
            </button>
           
        </div>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          <h2 id="modal-title">Notifications</h2>
          <p id="modal-description">Here are your notifications...</p>
          <div className='updates-content'>
          <div className="list-item">
            <div className="update-content">
              <Avatar style={{ backgroundColor: '#BA55D3' ,padding: 22}}>PS</Avatar>
              <div style={{ marginLeft: '12px' }}>
                <p>Your slots are open</p>
                <div style={{ marginTop: '5px' }}>
                  <span className="update-time">5 mins ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item">
            <div className="update-content">
              <Avatar style={{ backgroundColor: '#BA55D3' ,padding: 22}}>PS</Avatar>
              <div style={{ marginLeft: '12px' }}>
                <p>We have launched new course</p>
                <div style={{ marginTop: '7px' }}>
                  <FontAwesomeIcon icon={faFilePdf} style={{ color: 'white'}} />
                  <span className="update-time">  here we have attached the course material</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item">
            <div className="update-content">
              <Avatar style={{ backgroundColor: '#BA55D3',padding: 22 }}>PS</Avatar>
              <div style={{ marginLeft: '12px' }}>
                <p>Java level 3 slot opened</p>
                <div style={{ marginTop: '5px' }}>
                  <span className="update-time">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item">
            <div className="update-content">
              <Avatar style={{ backgroundColor: '#BA55D3',padding: 22}}>PS</Avatar>
              <div style={{ marginLeft: '12px' }}>
                <p>Python level 7 material added</p>
                <div style={{ marginTop: '5px' }}>
                  <span className="update-time">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Box>
      </Modal>

      <Modal
        open={profileOpen}
        onClose={handleProfileClose}
        aria-labelledby="profile-modal-title"
        aria-describedby="profile-modal-description"
      >
        <Box className="modal-box" >
      <Typography variant="h5" id="profile-modal-title">
        <center>
        Profile<br /> <br />
        NANDHA KISHORE K.G <br /> <br />
        </center>
      </Typography>
      <center>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ExitToAppIcon />}
        onClick={() => alert('Sign out action')}
        sx={{ marginTop: 2 }}
      >
        Sign Out
      </Button>
      </center><br />
    </Box>
      </Modal>
    </div>
  
  )
}

export default ContentTop
