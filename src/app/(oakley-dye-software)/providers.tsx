"use client";

import { themeOptions } from "@/styles/theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme(themeOptions);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
