//import { Route, Routes } from "react-router-dom";
import "./About.css";
import Hero from "../../assets/Hero.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={Hero}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
          Hello my name is Jessica and I am a junior web developer. I just
          finished a Full Stack Web Development Bootcamp at Arizona State
          University.
        </p>
        <p id="p-about">
          I have over 20 years of experience in the healthcare field. I am not
          sure what else to say here yet.
        </p>
      </div>
    </>
  );
}
