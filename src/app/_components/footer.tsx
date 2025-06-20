"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import * as React from "react";

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const canvasRef = React.useRef(null);

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

      for (let i = 0; i < 50; i++) {
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
    <footer className="footer" style={{ position: "relative" }}>
      <Divider variant="fullWidth" />
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
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Box>
          <img
            src="/footer_logo.webp"
            alt="footer logo"
            height="auto"
            width="20%"
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ textAlign: "center" }} gutterBottom>
          © 2024 Oakley Dye Software & Design. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
