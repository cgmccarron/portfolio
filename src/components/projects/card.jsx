import { AspectRatio, CardOverflow, Typography } from "@mui/joy";
import { motion } from "framer-motion";
import Card from "@mui/joy/Card";

const ProjectCard = (props) => {
  const alert = () => {
    console.log("button pressed");
  };

  return (
    <Card sx={{ width: 300, bgcolor: "var(--bg)" }}>
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
        <motion.button
          className="card-button"
          id="info"
          onClick={props.handleModal}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Info
        </motion.button>
        <motion.button
          className="card-button"
          id="demo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://www.theodinproject.com/">Demo</a>
        </motion.button>
        <motion.button
          className="card-button"
          id="github"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Github
        </motion.button>
      </CardOverflow>
    </Card>
  );
};

export default ProjectCard;
