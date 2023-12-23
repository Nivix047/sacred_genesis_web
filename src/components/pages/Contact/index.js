import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import emailjs from "emailjs-com";
import "./Contact.css";
import { validateEmail } from "../../../utils/validateEmail";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update form values
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validation logic
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.length) {
        setErrorMessage(`${name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errorMessage) {
      console.log("Fix errors before submitting");
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formValues,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitSuccess(true);
          // Reset form here if needed
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
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
                  rows={16}
                  fullWidth
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{ style: { color: "white" } }}
                />
                <Button variant="contained" type="submit">
                  Send
                </Button>
                {errorMessage && (
                  <Typography color="error" style={{ marginTop: "10px" }}>
                    {errorMessage}
                  </Typography>
                )}
                {submitSuccess && (
                  <Typography color="white" style={{ marginTop: "10px" }}>
                    Thank you for your message!
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
