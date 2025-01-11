import { Grid2, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import me from "./assets/me.jpg";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

const dataEducation = [
  {
    institution: "Université Lyon 1",
    degree: "Diplôme d'ingénieur, Intelligence artificielle",
    duration: "sept. 2024 - juin 2025",
    level: undefined,
    description:
      "Formation en intelligence artificielle avec les options LLM , Image et compression et data visualisation.",
    skills: [
      "Intelligence artificielle",
      "Image et compression",
      "LLM",
      "Data visualisation",
      "pytorch",
    ],
  },
  {
    institution: "Polytech Lyon",
    degree: "Diplôme d'ingénieur, Informatique",
    duration: "sept. 2022 - juin 2025",
    level: undefined,
    description:
      "Formation en ingénierie informatique avec un accent sur le développement logiciel, les algorithmes et les bases de données.",
    skills: [
      "Intelligence artificielle",
      "Algorithmes",
      "Anglais",
      "Structure des données",
      "HTML",
      "CSS",
      "Oracle SQL Developer",
      "Java",
      "IIS",
      "POO",
      "HTML5",
      "Programme assembleur",
      "JavaScript",
      "SQL",
      "Ingénierie informatique",
      "C#",
      "Développement agile",
      "Laravel",
      "Résolution de problèmes",
      "PHP",
      "C++",
      "PL/SQL",
      "Git",
      "tensorflow",
      "pytorch",
    ],
  },
  {
    institution: "Université de Pau et des Pays de l'Adour",
    degree: "Diplôme universitaire de technologie (DUT), Informatique",
    duration: "sept. 2020 - juin 2022",
    level: "Très bien",
    description:
      "Formation spécialisée en informatique, couvrant les fondamentaux du développement logiciel et des bases de données.",
    skills: [
      "Algorithmes",
      "Anglais",
      "Structure des données",
      "HTML",
      "CSS",
      "Oracle SQL Developer",
      "Java",
      "POO",
      "HTML5",
      "JavaScript",
      "SQL",
      "Développement agile",
      "PHP",
      "C++",
      "Framework Symfony",
      "PL/SQL",
      "Git",
    ],
  },
  {
    institution: "Lycée de Borda",
    degree:
      "Baccalauréat sciences et technologies de l'industrie et du développement durable",
    duration: "sept. 2018 - juin 2020",
    level: "Très bien",
    description:
      "Formation secondaire axée sur les sciences de l'ingénieur et le développement durable.",
    skills: ["Anglais", "HTML", "CSS", "JavaScript"],
  },
];

const dataExperience = [
  {
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEBgVY4kaMnnA/company-logo_200_200/company-logo_200_200/0/1714641544841/quest_innov_logo?e=1744243200&v=beta&t=KN8HMW4lxOLpDOK1vXpokuI2Sqm0lRkH7sWOO88FvVo", // Replace with actual logo URL
    title: "Développeur web",
    company: "QUEST INNOV",
    type: "CDD",
    duration: "juin 2024 - août 2024 · 3 mois",
    location: "Dax, Nouvelle-Aquitaine, France · Sur site",
    description:
      "Développement de micro applications sur mesure pour le suivi des flux logistiques et des informations entre des gens du monde de l'agroalimentaire, les transporteurs et les fermiers",
    skills: [
      "React.js",
      "PostgreSQL",
      "Redux",
      "REST APIs",
      "Material-UI",
      "TypeScript",
      "Node.js",
      "Git",
    ],
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQElmWr4IaS_Ww/company-logo_200_200/company-logo_200_200/0/1646809045379/tecnalia_research__innovation_logo?e=1744243200&v=beta&t=J2Xi2SNwiQ0v2miPV1yWBSw09QZkFPyzICe5MLvGRDk", // Replace with actual logo URL
    title: "Développeur web",
    company: "TECNALIA Research & Innovation",
    type: "Stage",
    duration: "sept. 2023 - janv. 2024 · 5 mois",
    location: "Saint-Sébastien, Pays Basque, Espagne · Hybride",
    description:
      "Création d'une interface web pour le projet Exkalbot qui permet la perparation de plats de pâtes personnalisés de façon automatique sur une borne de commande tel que celles des fast-foods",
    skills: [
      "React.js",
      "PostgreSQL",
      "Redux",
      "REST APIs",
      "Material-UI",
      "TypeScript",
      "CI/CD",
      "Node.js",
      "Git",
    ],
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEBgVY4kaMnnA/company-logo_200_200/company-logo_200_200/0/1714641544841/quest_innov_logo?e=1744243200&v=beta&t=KN8HMW4lxOLpDOK1vXpokuI2Sqm0lRkH7sWOO88FvVo", // Replace with actual logo URL
    title: "Développeur web",
    company: "QUEST INNOV",
    type: "CDD",
    duration: "juin 2023 - août 2023 · 3 mois",
    location: "Dax, Nouvelle-Aquitaine, France · Sur site",
    description:
      "Développement de micro applications sur mesure pour le suivi des flux logistiques et des informations entre des gens du monde de l'agroalimentaire, les transporteurs et les fermiers",
    skills: [
      "React.js",
      "PostgreSQL",
      "Redux",
      "REST APIs",
      "Material-UI",
      "TypeScript",
      "Node.js",
      "Git",
    ],
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEBgVY4kaMnnA/company-logo_200_200/company-logo_200_200/0/1714641544841/quest_innov_logo?e=1744243200&v=beta&t=KN8HMW4lxOLpDOK1vXpokuI2Sqm0lRkH7sWOO88FvVo", // Replace with actual logo URL
    title: "Développeur web",
    company: "QUEST INNOV",
    type: "Stage",
    duration: "avr. 2022 - juin 2022 · 3 mois",
    location: "Dax, Nouvelle-Aquitaine, France · Sur site",
    description:
      "Développement de micro applications sur mesure pour le suivi des flux logistiques et des informations entre des gens du monde de l'agroalimentaire, les transporteurs et les fermiers",
    skills: [
      "React.js",
      "PostgreSQL",
      "Redux",
      "REST APIs",
      "Material-UI",
      "TypeScript",
      "Node.js",
      "Git",
    ],
  },
];

const projectData = [
  {
    title: "Jeu PIPOPIPETTE avec IA",
    description:
      "Développement d'un jeu stratégique intégrant plusieurs algorithmes d'intelligence artificielle (minimax, alpha-beta, MCTS, AlphaZero). Réalisé dans le cadre du cours d'IA à Polytech Lyon.",
    technologies: ["React.js", "MUI", "JavaScript", "TypeScript", "IA"],
    link: "https://github.com/Energisse/POLYTECH-IA-PROJET-PIPOPIPETTE",
    image:
      "https://raw.githubusercontent.com/Energisse/POLYTECH-IA-PROJET-PIPOPIPETTE/refs/heads/master/example.gif",
  },
  {
    title: "Développement d'un microcontrôleur et de son assembleur",
    image:
      "https://github.com/Energisse/polytech-projet-architecture/raw/main/img/demo.gif",
    link: "https://github.com/Energisse/polytech-projet-architecture",
    description:
      "Développement d'un microcontrôleur a l'aide du logiciel Logisim et de son assembleur en Node'Js. Le projet a été réalisé dans le cadre du cours structure des calculateurs de Polytech Lyon.",
    technologies: ["Logisim", "Node.js", "JavaScript", "Typescript"],
  },
  {
    title:
      "Visualisation des rélations entre les personnages de Game of Thrones",
    image:
      "https://github.com/Energisse/M2IA-DATA_VIZ-TP4/raw/master/img/demo.gif",
    link: "https://github.com/Energisse/M2IA-DATA_VIZ-TP4",
    description:
      "Visualisation des rélations entre les personnages de Game of Thrones. Le projet a été réalisé dans le cadre du cours de visualisation de données du Master 2 IA de l'université Lyon 1.",
    technologies: ["D3.js", "JavaScript", "DataViz"],
  },
  {
    title: "Music show viz",
    image:
      "https://github.com/Energisse/music-show-viz/blob/master/doc/demo.gif?raw=true",
    link: "https://github.com/Energisse/music-show-viz",
    description:
      "Projet de visualisation de données sur nos habitudes d'écoute de musique. Le projet a été réalisé dans le cadre du cours de visualisation de données du Master 2 IA de l'université Lyon 1.",
    technologies: ["D3.js", "JavaScript", "Typescript", "DataViz", "React"],
  },
];

function App() {
  return (
    <Grid2 container flexDirection={"column"} p={1}>
      <Grid2 container justifyContent="center">
        <Grid2 size={6} p={1} paddingTop={15} paddingBottom={15}>
          <Typography variant="h2" m={8}>
            HALVICK Thomas
          </Typography>

          <Typography variant="h4" m={8}>
            Full-stack web developer Node/React
          </Typography>
          <Typography variant="body1" m={8} sx={{ lineHeight: 2 }}>
            Étudiant en double diplôme à Polytech Lyon et à l'Université Lyon 1,
            je me spécialise dans le développement web full-stack et
            l'intelligence artificielle. Passionné par les technologies
            innovantes, je transforme des idées en solutions concrètes et
            performantes. Mon expérience, acquise à travers des projets variés
            et des collaborations en entreprise, allie créativité et rigueur
            technique. Autonome et déterminé, je m'engage à relever des défis
            ambitieux pour concevoir des applications qui améliorent la vie des
            utilisateurs. Explorez mon portfolio pour découvrir mon parcours,
            mes compétences et mes réalisations. Ensemble, construisons des
            outils innovants et adaptés à vos besoins !
          </Typography>

          <Grid2 container justifyContent="center" gap={2}>
            <a
              href="https://www.linkedin.com/in/thomas-halvick-7709b81ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: 40,
                  color: "inherit",
                  "&:hover": { color: "#0077b5" },
                }}
              />
            </a>
            <a
              href="https://github.com/Energisse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  fontSize: 40,
                  color: "inherit",
                  "&:hover": { color: "#333" },
                }}
              />
            </a>
            <a href="mailto:thomas.halvick@gmail.com">
              <EmailIcon
                sx={{
                  fontSize: 40,
                  color: "inherit",
                  "&:hover": { color: "#EA4335" },
                }}
              />
            </a>
          </Grid2>
        </Grid2>
        <Grid2 size={6} p={1}>
          <img
            src={me}
            alt="Avatar"
            height={400}
            width={400}
            style={{
              borderRadius: "15px",
              rotate: "5deg",
              marginLeft: "50%",
              transform: "translateX(-50%) translateY(50%)",
            }}
          />
        </Grid2>
      </Grid2>
      <Grid2 container p={2}>
        <Typography variant="h2">Éducation</Typography>

        {dataEducation.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </Grid2>
      <Grid2 container p={2}>
        <Typography variant="h2">Expérience</Typography>

        {dataExperience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </Grid2>
      <Grid2 container p={2} flexDirection={"column"}>
        <Typography variant="h2">Projets</Typography>
        <Grid2 container flexDirection={"row"}>
          {projectData.map((exp, index) => (
            <Grid2 size={4} p={2}>
              <ProjectCard key={index} {...exp} />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

export default App;
