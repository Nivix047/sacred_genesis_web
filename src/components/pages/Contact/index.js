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

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorMessage(""); // Clear any error messages
    setSubmitSuccess(false); // Clear the success message
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;

    if (!value) {
      setErrorMessage(`${name} is required.`);
    } else if (name === "email" && !validateEmail(value)) {
      setErrorMessage("Your email is invalid.");
    } else {
      setErrorMessage("");
    }
  };

  const handleInputFocus = () => {
    setSubmitSuccess(false); // Clear the success message
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formValues;

    if (!name) {
      setErrorMessage("Name is required.");
      return;
    } else if (!email) {
      setErrorMessage("Email address is required.");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Your email is invalid.");
      return;
    } else if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    const emailData = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitSuccess(true);
          setFormValues({ name: "", email: "", message: "" }); // Clear the form
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <Box className="contact-container">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{ borderBottom: "2px solid white", paddingBottom: "20px" }}
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
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
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
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
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
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
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
  );
};

export default Contact;
