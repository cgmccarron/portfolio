import { AspectRatio, CardOverflow, Typography, Box } from "@mui/joy";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import * as React from "react";

const ProjectCard = (props) => {
  const alert = () => {
    console.log("button pressed");
  };

  return (
    <Card sx={{ minWidth: 100, maxWidth: 350, bgcolor: "var(--bg)" }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={props.imgSource} alt="" />
        </AspectRatio>
      </CardOverflow>
      <Typography
        level="h2"
        sx={{ fontSize: "md", mt: 2, bgcolor: "var(--bg)" }}
      >
        {props.title}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        {props.description}
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          gap: 1.5,
          py: 1.5,
          justifyContent: "space-around",
        }}
      >
        <button className="card-button" id="info" onClick={alert}>
          Info
        </button>
        <button className="card-button" id="demo">
          <a href="https://www.theodinproject.com/">Demo</a>
        </button>
        <button className="card-button" id="github">
          Github
        </button>
      </CardOverflow>
    </Card>
  );
};

export default ProjectCard;
