import { AspectRatio, CardOverflow, Typography, Box } from "@mui/joy";
import { palette } from "@mui/system";
import Card from "@mui/joy/Card";
import * as React from "react";

const ProjectCard = (props) => {
  return (
    <Card sx={{ minWidth: 100, maxWidth: 350, bgcolor: "var(--bg)" }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography
        level="h2"
        sx={{ fontSize: "md", mt: 2, bgcolor: "var(--bg)" }}
      >
        Yosemite National Park
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        California
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          gap: 1.5,
          py: 1.5,
          borderColor: "neutral.outlinedBorder",
          bgcolor: "var(--bg)",
        }}
      >
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          6.3k views
        </Typography>
        <Box sx={{ width: 2, bgcolor: "divider" }} />
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          1 hour ago
        </Typography>
      </CardOverflow>
    </Card>
  );
};

export default ProjectCard;
