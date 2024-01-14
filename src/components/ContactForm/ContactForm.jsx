import React, { useEffect, useReducer } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextField from "@mui/material/TextField";
import { emailRegex, formReducer, initialState } from "./FormReducer";

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    AOS.init();
    // AOS.init({ once: true }); // Only animate elements once
    AOS.init({ duration: 800 }); // Set animation duration to 800ms
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = state;
    const errors = {};

    // Name validation
    if (name.trim() === "") {
      errors.nameError = "Please enter your name.";
    }

    // Email validation
    if (email.trim() === "") {
      errors.emailError = "Please enter your  email address.";
    } else if (!emailRegex.test(email)) {
      errors.emailError = "Please enter a valid email address.";
    }

    // Message validation
    if (message.trim() === "") {
      errors.messageError = "Please enter your message.";
    }

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "VALIDATE", errors });
    } else {
      // Form submission logic
      // ...

      // Reset form
      dispatch({ type: "RESET" });
    }
  };

  const { name, email, message, errors } = state;

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="absolute -top-20" id="section5" />
      <h1 className="mainHeading">Contact Me</h1>

      <div
        data-aos="zoom-in"
        data-aos-offset={180}
        className="w-full flex flex-col gap-12 ss:mt-20 mt-16"
      >
        <div className="grid ss:grid-cols-2 grid-cols-1 gap-8 contact">
          <TextField
            id="standard-basic"
            label="Name *"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            variant="standard"
            helperText={errors.nameError && errors.nameError}
          />
          <TextField
            id="standard-basic"
            label="email *"
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            variant="standard"
            helperText={errors.emailError && errors.emailError}
          />
        </div>

        <TextField
          id="standard-basic"
          label="message *"
          name="message"
          value={message}
          onChange={handleChange}
          type="text"
          variant="standard"
          className="contact"
          minRows={8}
          helperText={errors.messageError && errors.messageError}
          multiline
        />

        <div className="flexCenter">
          <button className="transition-all duration-300 btn  button">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
