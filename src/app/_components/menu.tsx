"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { AppBar, Toolbar } from "@mui/material";
import * as React from "react";

const Menu: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ overflow: "hidden", height: "65px" }}>
        <Toolbar>
          <img
            src={`/logo.webp`}
            height="auto"
            width={isMobile ? "40%" : "20%"}
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Menu;
