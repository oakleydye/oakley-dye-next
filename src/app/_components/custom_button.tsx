import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  borderRadius: 50,
  border: 0,
  color: theme.palette.common.white,
  height: 48,
  padding: "0 30px",
  boxShadow: `0 3px 5px 2px ${theme.palette.grey[300]}`,
  textTransform: "uppercase",
  transition: "all 0.3s ease",
  "&": {
    transition: "background 0.3s, boxShadow 0.3s, transform 0.3s",
  },
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
    boxShadow: `0 10px 20px 2px ${theme.palette.grey[300]}`,
    transform: "translateY(-3px)",
  },
  "&:active": {
    boxShadow: `0 5px 10px 2px ${theme.palette.grey[300]}`,
    transform: "translateY(-1px)",
  },
}));

export default CustomButton;
