import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";
import PlayerInfo from "./components/PlayerInfo";
import Log from './components/Log';
import { Container } from "@mui/material";
import styles from "./components/TicTacToe.module.css";
import { useState } from "react";

function App() {
  const [playerSymbol, setPlayerSymbol] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const highlightSelectedPlayerHandler = (rowIndex, colIndex) => {
    let playerExists = gameTurns.find(x => x.square.row == rowIndex && x.square.col == colIndex);
    if(!playerExists){
      setPlayerSymbol((prev) => (prev == "X" ? "O" : "X"));
      setGameTurns((prevTurns) => {
        // we cannot add the player symbol directly since it's a state might not be correct 
        let currentPlayer = 'X';
        // checking 0 index since it's the latest value will be the first element
        if(prevTurns.length > 0 && prevTurns[0].player == 'X'){ 
          currentPlayer = 'O';
        }
  
        let updatedList = [
          {
            square: { row: rowIndex, col: colIndex },
            player: currentPlayer, 
          },
          ...prevTurns, // add latest obj then set prev values
        ];
        return updatedList;
      });
    }
    
  };

  return (
    <>
      <Header />
      <Container className={styles.gameContainer}>
        <section className={styles.gridStyle}>
          <section>
            <ol className={styles.playersList}>
              <PlayerInfo
                symbol="O"
                highlight={playerSymbol == "O" ? styles.highlight : ""}
              />
              <PlayerInfo
                symbol="X"
                highlight={playerSymbol == "X" ? styles.highlight : ""}
              />
            </ol>
          </section>
          <TicTacToe
            highlightSelectedPlayer={highlightSelectedPlayerHandler}
            gameTurns = {gameTurns}
          />
          <Log gameTurns = {gameTurns}/>
        </section>
      </Container>
    </>
  );
}

export default App;
