"use client";

import * as React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import CustomButton from "@/app/_components/custom_button";

const Hero: React.FC = () => {
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
        context.strokeStyle = "hsl(5 89% 31% / 0.1)";
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
      <div
        className={`relative w-screen h-screen flex ${
          isMobile ? "flex-col" : "flex-row"
        } bg-gradient-to-b from-background to-card items-center justify-center px-5 overflow-hidden`}
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        
        {isMobile ? (
          // Mobile layout: Content in a card, no image
          <div className="z-10 max-w-md w-full">
            <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
              <h1 className="text-4xl font-bold mb-6 text-center leading-tight">
                Your Vision, Our{" "}
                <span className="inline-block word-fade text-accent-foreground">
                  {words[currentWord]}
                </span>
              </h1>
              <p className="text-muted-foreground text-center mb-8 text-lg">
                Transform your ideas into reality with our expert development and consulting services.
              </p>
              <div className="flex justify-center">
                <CustomButton>Get Started</CustomButton>
              </div>
            </div>
          </div>
        ) : (
          // Desktop layout: Original design with image
          <>
            <div className="w-3/5 pr-12 z-10 pl-12">
              <h1 className="text-6xl font-bold mb-6 text-left leading-tight">
                Your Vision, Our{" "}
                <span className="inline-block word-fade">
                  {words[currentWord]}
                </span>
              </h1>
              <div className="mt-8">
                <CustomButton>Get Started</CustomButton>
              </div>
            </div>

            <div className="w-2/5 h-screen relative">
              <div
                className="absolute inset-0 bg-cover bg-center-right"
                style={{
                  backgroundImage: "url(/images/banner.jpg)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                  right: "-15%",
                }}
              />
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Hero;
