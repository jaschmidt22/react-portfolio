//importing necessary files and packages
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Resume.css";
import { grey } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";

const buttonColor = grey[800];
const buttonColorHover = grey[500];
const buttonTextColor = grey[50];
const profHeaderColor = cyan[900];

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
              color: buttonTextColor,
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
            fontFamily: "Arial, Helvetica, sans-serif",
            color: profHeaderColor,
          }}
        >
          Front-End Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "0px",
            fontFamily: "Arial, Helvetica, sans-serif",
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
            fontFamily: "Arial, Helvetica, sans-serif",
            color: profHeaderColor,
          }}
        >
          Back-End Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "20px",
            fontFamily: "Arial, Helvetica, sans-serif",
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
