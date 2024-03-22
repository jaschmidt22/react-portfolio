//importing necessary files and packages
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Resume.css";
import { grey } from "@mui/material/colors";

const buttonColor = grey[800];
const buttonColorHover = grey[400];

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
          <Button
            id="resume-button"
            className="pop-on-hover"
            sx={{
              backgroundColor: buttonColor,
              color: "inherit",
              "&:hover": { backgroundColor: buttonColorHover },
            }}
          >
            Future Resume Download Here
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            font: "Arial, Helvetica, sans-serif",
          }}
        >
          Front-End Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "0px",
            font: "Arial, Helvetica, sans-serif",
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
            font: "Arial, Helvetica, sans-serif",
          }}
        >
          Back-End Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "20px",
            font: "Arial, Helvetica, sans-serif",
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
