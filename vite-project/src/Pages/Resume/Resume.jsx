//importing necessary files and packages
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Resume.css";

//function that renders future downloadable resume, proficiencies & exports
export default function Resume() {
  return (
    <Box>
      <div>
        <a
          download=""
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
            Future Resume Download Here
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front-End Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "0px",
          }}
        >
          ▪️ HTML / CSS / GIT
          <br /> ▪️ JavaScript
          <br /> ▪️ JQuery
          <br /> ▪️ JSON
          <br /> ▪️ Bootstrap
          <br /> ▪️ API's
          <br /> ▪️ React
          <br /> ▪️ Responsive Design
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-End Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "20px",
          }}
        >
          ▪️ SQL / MYSQL / NoSQL
          <br /> ▪️ Node
          <br /> ▪️ Express
          <br /> ▪️ MongoDB
          <br /> ▪️ MERN Stack
          <br /> ▪️ API's
          <br /> ▪️ GraphQL
        </p>
      </div>
    </Box>
  );
}
