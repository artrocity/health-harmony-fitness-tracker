// Import 3rd Party Libraries
import React, { useState } from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Import Material UI Components
import { TextField, Button, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Import Custom CSS
import './ContactView.css';

function ContactView() {
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newContact);
    alert(
      'Thank you for contacting us, a representative will reach out shortly'
    );
    setNewContact({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className="container">
        <div className="horizontal-nav-container">
          <HorizontalNav />
        </div>
        <div className="contact-page-container">
          <div className="contact-left-container">
            <h1 className="contact-left-header">We'd love to hear from you!</h1>
            <div className="contact-info-item">
              <EmailIcon />{' '}
              <p className="contact-left-paragraph">
                support@healthharmony.com
              </p>
            </div>
            <div className="contact-info-item">
              <PhoneIcon />{' '}
              <p className="contact-left-paragraph">(123) 675-5309</p>
            </div>
            <div className="contact-info-item">
              <LocationOnIcon />{' '}
              <p className="contact-left-paragraph">
                123 Paradise St. Silicone Valley
              </p>
            </div>
          </div>
          <div className="contact-right-container">
            <form
              onSubmit={handleSubmit}
              style={{ margin: 'auto', width: '80%' }}
            >
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{ textAlign: 'center', fontSize: '30px' }}
                  >
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={newContact.name}
                    onChange={handleChange}
                    required
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={newContact.email}
                    onChange={handleChange}
                    required
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    name="message"
                    multiline
                    rows={4}
                    value={newContact.message}
                    onChange={handleChange}
                    required
                  ></TextField>
                </Grid>
              </Grid>
              <div className="contact-button-container">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  style={{
                    marginTop: '20px',
                    backgroundColor: '#782cf6',
                    color: 'white',
                  }}
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactView;
