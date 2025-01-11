import {
  Grid2,
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Chip,
  Paper,
} from "@mui/material";

export type ExperienceCardProps = {
  logo: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description?: string;
  skills: string[];
};

export default function ExperienceCard({
  logo,
  title,
  company,
  type,
  duration,
  location,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <Grid2
      width="100%"
      paddingLeft={2}
      sx={{
        position: "relative",
        ":before": {
          left: "-1px",
          content: '""',
          position: "absolute",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(200,200,200)",
          transform: "translateX(-50%) translateY(-50%)",
        },
        borderLeft: "2px solid rgba(200,200,200)",
        marginBottom: 3,
      }}
    >
      <Paper>
        <Card variant="outlined" sx={{ padding: 2 }}>
          <CardContent>
            <Grid2 container spacing={2}>
              <Grid2
                size={12}
                container
                justifyContent="center"
                alignItems="center"
              ></Grid2>
              <Grid2 size={12}>
                <Grid2
                  container
                  flexDirection={"row"}
                  alignItems="center"
                  gap={2}
                >
                  <Typography variant="h4">{title}</Typography>
                  <Avatar
                    src={logo}
                    alt={company}
                    sx={{ width: 64, height: 64 }}
                  />
                </Grid2>
                <Typography variant="subtitle1" color="text.secondary">
                  {company} · {type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {location}
                </Typography>
                {description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                  >
                    {description}
                  </Typography>
                )}
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Paper>
    </Grid2>
  );
}
