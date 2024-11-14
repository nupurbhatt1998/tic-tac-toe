import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";

const WinningModal = ({ player,onClick }) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <Typography variant="h1" color="primary">
          GAME OVER !
        </Typography>
        <Typography>{player ? `${player} WON!!` : "Match Draw!!"}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick}>REMATCH!</Button>
      </CardActions>
    </Card>
  );
};

export default WinningModal;
