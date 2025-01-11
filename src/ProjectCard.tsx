import {
  Grid2,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Paper,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Grid2 paddingLeft={2} sx={{ marginBottom: 3 }}>
      <Paper>
        <Card variant="outlined" sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "auto", marginTop: 2 }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              {description}
            </Typography>
            <Box
              sx={{ marginTop: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
            >
              {technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  color="secondary"
                  variant="outlined"
                />
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              href={link}
              target="_blank"
              sx={{ marginTop: 2 }}
              startIcon={<GitHubIcon />}
            >
              Voire le projet
            </Button>
          </CardContent>
        </Card>
      </Paper>
    </Grid2>
  );
}
