"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { CodeTwoTone } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import * as React from "react";

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box sx={{ display: "flex", flexDirection: "row", position: "relative" }}>
        {!isMobile && (
          <Box
            sx={{
              width: "50%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "45%",
                background: "url(/images/about.webp) no-repeat center center",
                backgroundSize: "cover",
              },
            }}
          />
        )}
        <Box sx={{ width: isMobile ? "100%" : "50%" }}>
          <Typography
            variant={isMobile ? "h3" : "h1"}
            textAlign={isMobile ? "center" : "left"}
          >
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to Oakley Dye Software & Design, where your vision becomes
            our mission. We are a passionate team of skilled professionals
            dedicated to bringing your ideas to life through innovative coding,
            striking web design, creative graphic solutions, and a variety of
            small business services tailored to your unique needs.
          </Typography>
          <Typography variant="h5">Our Story</Typography>
          <Typography variant="body1" gutterBottom>
            Founded with a vision to make high-quality digital services
            accessible to businesses of all sizes, Oakley Dye Software & Design
            has grown from a small startup into a trusted partner for many. Our
            journey began with a simple yet powerful idea: to combine technical
            expertise with creative thinking to help businesses thrive in the
            digital age. Over the years, we have expanded our services and honed
            our skills to stay ahead of industry trends and deliver exceptional
            results.
          </Typography>
          <Typography variant="h5">Our Philosophy</Typography>
          <Typography variant="body1" gutterBottom>
            At Oakley Dye Software & Design, we believe that every project is an
            opportunity to create something extraordinary. We take the time to
            understand your goals, challenges, and aspirations, ensuring that
            our solutions are perfectly aligned with your vision. Our
            collaborative approach means that we work closely with you every
            step of the way, providing transparency, communication, and support
            throughout the entire process.
          </Typography>
          <Typography variant="h5">Our Services</Typography>
          <Typography variant="body1" gutterBottom>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CodeTwoTone color="primary" fontSize="small" />
                </ListItemIcon>
                Custom Coding: Whether you need a bespoke software solution, an
                interactive web application, or complex system integration, our
                coding experts are here to turn your requirements into reality.
                We specialize in a range of programming languages and
                frameworks, ensuring that your project is built on a robust and
                scalable foundation.
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CodeTwoTone color="primary" fontSize="small" />
                </ListItemIcon>
                Web Design: First impressions matter. Our talented designers
                craft visually stunning and user-friendly websites that
                captivate your audience and drive engagement. From responsive
                design to intuitive navigation, we ensure your website not only
                looks great but also performs seamlessly across all devices.
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CodeTwoTone color="primary" fontSize="small" />
                </ListItemIcon>
                Graphic Design: Visual storytelling is at the heart of our
                graphic design services. We create compelling graphics, logos,
                branding materials, and marketing collateral that reflect your
                brand identity and resonate with your target audience. Let us
                help you make a lasting impression with design that speaks
                volumes.
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CodeTwoTone color="primary" fontSize="small" />
                </ListItemIcon>
                Small Business Services: Running a small business can be
                challenging, but you don't have to do it alone. We offer a range
                of support services, including digital marketing, SEO, social
                media management, and consulting, to help you grow and succeed
                in a competitive market.
              </ListItem>
            </List>
          </Typography>
          <Typography variant="h5">Our Commitment</Typography>
          <Typography variant="body1" gutterBottom>
            We are committed to excellence in everything we do. Our team is
            dedicated to staying at the forefront of technology and design,
            continually learning and evolving to bring you the best possible
            solutions. We pride ourselves on our attention to detail,
            creativity, and unwavering commitment to your satisfaction.
          </Typography>
          <Typography variant="h5">Why Choose Us?</Typography>
          <Typography variant="body1" gutterBottom>
            Expertise: With years of experience and a diverse skill set, our
            team has the knowledge and expertise to tackle even the most complex
            projects. Innovation: We are passionate about innovation and
            constantly seek new ways to solve problems and improve our services.
            Collaboration: We believe in the power of collaboration and work
            closely with our clients to ensure their vision is realized.
            Quality: Our dedication to quality means that we deliver results
            that exceed expectations and stand the test of time. Thank you for
            considering Oakley Dye Software & Design. We look forward to
            partnering with you and turning your vision into reality.
            <br />
            <br />
            Contact Us today to discuss your project and discover how we can
            help you achieve your goals.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutSection;
