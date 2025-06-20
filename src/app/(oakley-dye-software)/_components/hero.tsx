"use client";

import { Box, Button, Typography, styled, useTheme } from "@mui/material";
import * as React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import CustomButton from "@/app/_components/custom_button";

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const [currentWord, setCurrentWord] = React.useState(0);
  const canvasRef = React.useRef(null);

  const words = [
    "Expertise",
    "Innovation",
    "Creativity",
    "Solutions",
    "Quality",
  ];

  const AnimatedWord = styled("span")`
    display: inline-block;
    animation: fade 3s infinite;

    @keyframes fade {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      20% {
        opacity: 1;
        transform: translateY(0);
      }
      80% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }
  `;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = (canvas as HTMLCanvasElement).getContext("2d");
    if (!context) return;
    const dpr = window.devicePixelRatio || 1;
    (canvas as HTMLCanvasElement).width = window.innerWidth * dpr;
    (canvas as HTMLCanvasElement).height = window.innerHeight * dpr;
    context.scale(dpr, dpr);

    const drawRandomLines = () => {
      context.clearRect(
        0,
        0,
        (canvas as HTMLCanvasElement).width / dpr,
        (canvas as HTMLCanvasElement).height / dpr
      );

      for (let i = 0; i < 100; i++) {
        context.beginPath();
        context.moveTo(
          (Math.random() * (canvas as HTMLCanvasElement).width) / dpr,
          (Math.random() * (canvas as HTMLCanvasElement).height) / dpr
        );
        context.lineTo(
          (Math.random() * (canvas as HTMLCanvasElement).width) / dpr,
          (Math.random() * (canvas as HTMLCanvasElement).height) / dpr
        );
        // context.strokeStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.3)`;
        context.strokeStyle = theme.palette.primary.main + "10";
        context.lineWidth = Math.random() * 2;
        context.stroke();
      }
    };

    drawRandomLines();

    window.addEventListener("resize", drawRandomLines);

    return () => window.removeEventListener("resize", drawRandomLines);
  }, []);

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          px: 5,
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          sx={{
            width: "60%",
            pr: "50px",
            zIndex: 1,
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            gutterBottom
            textAlign={isMobile ? "center" : "left"}
          >
            Your Vision, Our <AnimatedWord>{words[currentWord]}</AnimatedWord>
          </Typography>
          {/* <Typography variant='h4' gutterBottom>Custom coding, web design, graphic design, and more. We turn your ideas into reality.</Typography> */}
          <Box>
            <CustomButton variant="contained" color="primary" sx={{ mt: 2 }}>
              Get Started
            </CustomButton>
          </Box>
        </Box>

        <Box
          sx={{
            width: isMobile ? "100%" : "40%",
            height: "100vh",
            mt: isMobile ? 2 : undefined,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: isMobile ? 0 : "-15%",
              background: "url(/images/hero.webp) no-repeat center right",
              backgroundSize: "cover",
              clipPath: isMobile
                ? undefined
                : "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
            },
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Hero;
