
import React, { useState,useRef,useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './App.css';
import { Grid, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHdd, faEnvelope,faBell } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const handleAnnualy = () => {
    setIsMonthly(false);
  };

  const handleMonthly = () => {
    setIsMonthly(true);
  };
  const handleNotificationClick = () => {
    setShowPopup(!showPopup);
  };

  const handleDocumentClick = (e) => {
    if (showPopup && popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showPopup]);
  return (
    <div className='app-container'>
      <Header />
      <Grid container>
      <Grid item lg={2} md={3} display={{ xs: 'none', md: 'block'}}>
          <Sidebar />
        </Grid>
        <Grid item lg={9} md={8} xs={10} sm={11} style={{ padding: '20px' }} id="grid-container">
          <div>
            <Typography variant="h5" style={{ marginBottom: '20px' }}>
              Choose a plan that's just right for you!
              <div id='buttons' variant='contained'>
                <button
                  onClick={handleAnnualy}
                  className={!isMonthly ? 'selected' : ''}
                >
                  Annually
                </button>
                <button
                  onClick={handleMonthly}
                  className={isMonthly ? 'selected' : ''}
                >
                  Monthly
                </button>
              </div>
            </Typography>
          </div>

          <Grid id="card-grid" gap={3}>
            <Grid item lg={4} md={4} xs={12} >
            <Card className="card">
              <CardContent>
                <Typography variant="h6" className="card-title">
                <b> Basic</b>
                </Typography>
                <Typography variant="subtitle2" className="old-price">
                $89.99/{isMonthly ? 'mo' : 'yr'}
                </Typography>
                <Typography variant="subtitle1">$9.99/{isMonthly ? 'mo' : 'yr'}</Typography>
                <button className="card-button">Get Started<span className="arrow-icon">&#8594;</span></button>
                <hr />
                <List>
                <ListItem>
                    <ListItemText>What you'll get</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faUser} /> Upto 25 users</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faHdd} /> Upto 25gb Storage</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faEnvelope} /> Email support</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><u>Explore features</u></ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
            <Card className="card">
              <CardContent>
                <Typography variant="h6" className="card-title"><b>
                  Standard</b>
                </Typography>
                <Typography variant="subtitle2" className="old-price">
                $189.99/{isMonthly ? 'mo' : 'yr'}
                </Typography>
                <Typography variant="subtitle1">$99.99/{isMonthly ? 'mo' : 'yr'}</Typography>
                <button className="card-button-secondary">Get Started<span className="arrow-icon">&#8594;</span></button>
                <hr />
                <List>
                <ListItem>
                    <ListItemText>What you'll get</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faUser} /> Upto 50 users</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faHdd} /> Upto 50gb Storage</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faEnvelope} /> Email + Chat support</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><u>Explore features</u></ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} xs={12} sm={12}>
            <Card className="card">
              <CardContent>
                <Typography variant="h6" className="card-title"><b>
                  Premium</b>
                </Typography>
                <Typography variant="subtitle2" className="old-price">
                $389.99/{isMonthly ? 'mo' : 'yr'}
                </Typography>
                <Typography variant="subtitle1">$199.99/{isMonthly ? 'mo' : 'yr'}</Typography>
                <button className="card-button-tertiary">Get Started<span className="arrow-icon">&#8594;</span></button>
                <hr />
                <List>
                <ListItem>
                    <ListItemText>What you'll get</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faUser} /> Upto 100 users</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faHdd} /> Upto 100gb Storage</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FontAwesomeIcon icon={faEnvelope} /> Email+Chat+Whatsapp Support</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><u>Explore features</u></ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} gap={0} id="card-grid2">
         <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className="card-card-wide">
              <CardContent id="card-div">
                <div>
                <button className="card-button-four">Let's Connect</button>
                <Typography variant="h6" className="card-title">
                  Free Starter
                </Typography>
                <Typography variant="subtitle1">
                  The quickest and easiest way to try protocols with basic functionalities
                </Typography>
                <button className="card-button-four">Get Started<span className="arrow-icon">&#8594;</span></button>
                </div>
                <div>
                <List>
                  <ListItem>
                    <ListItemText>What you'll get</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                    <FontAwesomeIcon icon={faUser} />Upto 8 users
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                    <FontAwesomeIcon icon={faHdd} /> Upto 3gb Storage
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                    <FontAwesomeIcon icon={faEnvelope} /> Email support
                    </ListItemText>
                  </ListItem>
                </List></div>
              </CardContent>
            </Card>
            </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className="card-card-wide">
              <CardContent id="card-div">
                <div>
                <button className="card-button-five">Let's Connect</button>
                <Typography variant="h6" className="card-title">
                  Enterprise plan
                </Typography>
                <Typography variant="subtitle1">
                  Effortlessly customise and fine tune services as your needs shift ensuring the perfect tools for success
                </Typography>
                <button className="card-button-five">Contact us<span className="arrow-icon">&#8594;</span></button>
                </div><div>
                <List>
                  <ListItem>
                    <ListItemText>What you'll get</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                    <FontAwesomeIcon icon={faUser} />More than 75 users
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                    <FontAwesomeIcon icon={faEnvelope} />Customisation of all other features
                    </ListItemText>
                  </ListItem>
                </List></div>
              </CardContent>
              </Card>
              </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={2} style={{ backgroundColor: '#E3F1FE', padding: '20px', height: '100vw',  justifyContent:'center'}}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', justifyItems:'center'}}>
            <button className="notification-button" onClick={handleNotificationClick}>
              <FontAwesomeIcon icon={faBell} className="notification-icon" ref={popupRef} />
              <span className="notification-count" ref={popupRef}>1</span>
            </button>
          </div>
          {showPopup && (
            <div className="popup-message">
              Thank you for visiting
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
