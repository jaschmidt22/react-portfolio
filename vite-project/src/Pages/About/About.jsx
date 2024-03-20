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
          Hello! My name is Jessica and I am a junior web developer. I am a
          recent graduate of a Full Stack Web Development Bootcamp through
          Arizona State University. I have over 20 years of experience in the
          medical field, working side by side with doctors and patients in a
          fast-paced and detail-oriented environment. I am excited to bring my
          unique background to the tech industry and am eager to continue to
          grow and develop my skills as a web developer.
        </p>
      </div>
    </>
  );
}
