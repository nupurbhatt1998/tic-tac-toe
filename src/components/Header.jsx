import { Container, SvgIcon, Typography } from "@mui/material";
import ReactIcon from "../assets/react.svg";

const Header = () => {
  return (
    <Container>
       <img src={ReactIcon} style={{ height: "50px" }} />
      <Typography
        variant="h4"
        color="secondary"
        gutterBottom
        textAlign="center"
      >
        
        React Tic-Tac-Toe
      </Typography>
    </Container>
  );
};

export default Header;
