import {
  Grid2,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Paper,
  Button,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  repo: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  repo,
}: ProjectCardProps) {
  return (
    <Grid2 component={Paper} height={"100%"}>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader title={title} />
        <CardMedia component="img" height="auto" image={image} alt={title} />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            {description}
          </Typography>
          <Box sx={{ marginTop: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                color="secondary"
                variant="outlined"
              />
            ))}
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={repo}
            target="_blank"
            sx={{ marginTop: 2 }}
            startIcon={<GitHubIcon />}
          >
            Voir le projet
          </Button>
          {link && (
            <Button
              variant="contained"
              color="secondary"
              href={link}
              target="_blank"
              sx={{ marginTop: 2 }}
            >
              Voir le site
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid2>
  );
}
