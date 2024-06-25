import "./About.css";
import hero from "../../assets/hero.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <div className="hero-container">
      <CardMedia
        component="img"
        className="hero-img"
        style={{
          height: "auto",
          width: "20%",
          margin: "50px",
          paddingTop: "20px",
        }}
        image={hero}
        alt="About Me"
      />
      <div className="hero-text">
        <h1 id="about-me-title">nice to meet you...</h1>
        <p id="p-about">
          Hello! My name is Jessica, and I am a junior web developer. I recently
          graduated from a Full Stack Web Development Bootcamp at Arizona State
          University. With over 20 years of experience in the medical field,
          I've worked closely with doctors and patients in fast-paced,
          detail-oriented environments. I am excited to bring my unique
          background to the tech industry and am eager to continue growing and
          developing my skills as a web developer.
        </p>
        {/* <p id="p-about">
          I am proficient in HTML, CSS, JavaScript, Node.js, Express.js, MySQL,
          MongoDB, React, and responsive web design. I have experience with
          front-end and back-end development, and I am eager to continue
          learning new technologies.
        </p> */}
        <p id="p-about">
          Take a look at my Portfolio, download my Resume, navigate to my
          GitHub, or send me an email. I would love to hear from you!
        </p>
      </div>
    </div>
  );
}
