"use client";
import styles from "./page.module.css";
import { Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import iconImage from "/workspaces/Complainers-R-Us/frontend-app/app/icon.jpeg";

export default function Home() {
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <Box sx={{ position: "absolute", top: "20px", right: "50px" }}>
        <Image src={iconImage} alt="Icon" width={96} height={96} />
      </Box>
      <Typography
        variant="h1"
        component="h1"
        className={styles.title} // Apply the .title class for the underline and spacing
        sx={{
          fontFamily: "TAN Headline",
          color: "#FFFFFF",
          textAlign: "center",
        }}
        gutterBottom
      >
        Complainers{" "}
        <span
          style={{
            transform: "scaleX(-1)",
            display: "inline-block",
            color: theme.palette.primary.main,
          }}
        >
          R
        </span>{" "}
        Us
      </Typography>
      <Typography
        variant="Georgia"
        className={styles.text} // Apply the .text class for spacing
        sx={{
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: "1.25rem",
          maxWidth: "600px",
        }}
      >
        Welcome to the ultimate complaining platform. Share your thoughts and let it all out!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/complain"
        sx={{
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          backgroundColor: "#FFFFFF", // Initial background color white
          color: "#000000", // Initial font color black
          borderRadius: "5px",
          transition: "transform 0.3s ease-in-out, background-color 0.3s, color 0.3s", // Smooth transition for color changes
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#000000", // Background color black on hover
            color: "#FFFFFF", // Font color white on hover
          },
        }}
      >
        Complain
      </Button>
    </main>
  );
}
