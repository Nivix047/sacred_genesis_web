import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import "./Contact.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <Box className="contact-container">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{ textDecoration: "underline" }}
              >
                Got Questions?
              </Typography>
              <Typography variant="h2">
                We've got tokens of wisdom. Ask away!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <TextField
                  required
                  label="Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  variant="filled"
                  fullWidth
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  required
                  label="Email address"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  variant="filled"
                  fullWidth
                  type="email"
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  required
                  label="Message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  variant="filled"
                  multiline
                  rows={16} // You can adjust the row count
                  fullWidth
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <Button variant="contained" type="submit">
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
