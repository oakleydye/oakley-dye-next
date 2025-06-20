"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { clientData } from "@/lib/client_data";
import { Masonry } from "@mui/lab";
import { Box, Card, Container, Typography } from "@mui/material";
import * as React from "react";

const PortfolioSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 10, height: "900px", overflowY: "scroll", mb: 10 }}
    >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Our Work
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
        Explore some of our recent projects and see how we've helped businesses
        achieve their goals.
      </Typography>
      <Box>
        <Masonry columns={{ sm: 1, md: 2 }} spacing={2}>
          {clientData.map((client, index) => (
            <Card key={index} sx={{ height: "800px", p: 2 }}>
              <iframe
                src={client.link}
                width={isMobile ? "400px" : "100%"}
                height="800px"
              />
            </Card>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
};

export default PortfolioSection;
