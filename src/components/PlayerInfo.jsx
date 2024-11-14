import { Button, TextField } from "@mui/material";
import styles from "./PlayerInfo.module.css";
import { useState } from "react";

const PlayerInfo = ({ symbol, highlight, playerNameChange, initialName}) => {
  const [toggleValue, setToggleValue] = useState(true);
  const [playerName, setPlayerName] = useState("");

  const toggleValueHandler = () => {
    setToggleValue(!toggleValue);
    if (!toggleValue) {
      playerNameChange(symbol, playerName);
    }
  };

  const playerNameHandler = (e) => {
    setPlayerName(e.target.value);
  };
   
  return (
    <li className={`${styles.players} ${highlight} `}>
      <TextField
        id="filled-basic"
        variant="filled"
        onChange={playerNameHandler}
        sx={{
          "& .MuiInputBase-input": { color: "white" }, // Input text color
          "& .MuiInputLabel-root": { color: "green" }, // Label text color
        }}
        value={playerName}
        defaultValue="Default Value"
        slotProps={{
          input: {
            readOnly: toggleValue,
          },
        }}
      />
      <span>{symbol}</span>

      <Button onClick={toggleValueHandler} variant="outlined" color="primary">
        {toggleValue ? "EDIT" : "SAVE"}
      </Button>
    </li>
  );
};

export default PlayerInfo;
