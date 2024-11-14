import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import { Container } from "@mui/material";
import styles from "./components/TicTacToe.module.css";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import WinningModal from "./components/WinningModal";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const derivedFunctionPlayer = (gameTurns) => {
  // we cannot add the player symbol directly since it's a state might not be correct
  let currentPlayer = "X";
  // checking 0 index since it's the latest value will be the first element
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const getWinner = (playersName,gameBoard) => {
  let winner;
  for (var combination of WINNING_COMBINATIONS) {
    let firstSquare = gameBoard[combination[0].row][combination[0].column];
    let secondSquare = gameBoard[combination[1].row][combination[1].column];
    let thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquare &&
      firstSquare == secondSquare &&
      firstSquare == thirdSquare
    ) {
      winner = playersName[firstSquare];
    }
  }
  return winner;
};

const updateGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_BOARD.map((initalValue) => [...initalValue])];

  // with of value is aasigned to gameTurn, therefore an empty object is assigned in case of empty array
  // with in index is assigned to gameTurn ,i.e '0' therefore destructing it results in undefined
  for (var gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
};

function App() {
  // const [playerSymbol, setPlayerSymbol] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [playersName, setPlayersName] = useState(PLAYERS);
  
  const activePlayer = derivedFunctionPlayer(gameTurns);
  const gameBoard = updateGameBoard(gameTurns);
  const winner = getWinner(playersName,gameBoard);

  let isMatchDraw = gameTurns.length == 9 && !winner;

  const highlightSelectedPlayerHandler = (rowIndex, colIndex) => {
    // setPlayerSymbol((prev) => (prev == "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedFunctionPlayer(prevTurns);

      let updatedList = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns, // add latest obj then set prev values
      ];
      return updatedList;
    });
  };

  const rematchHandler = () => {
    setGameTurns([]);
  };

  const playerNameHandler = (symbol, playerName) => {
    setPlayersName((prevVal) => {
      return { ...prevVal, [symbol]: playerName };
    });
  };

  return (
    <>
      <Header />
      <Container className={styles.gameContainer}>
        <section className={styles.gridStyle}>
          <section>
            <ol className={styles.playersList}>
              <PlayerInfo
                symbol="X"
                highlight={activePlayer == "X" ? styles.highlight : ""}
                playerNameChange={playerNameHandler}
                initialName={PLAYERS.X}
              />
              <PlayerInfo
                symbol="O"
                highlight={activePlayer == "O" ? styles.highlight : ""}
                playerNameChange={playerNameHandler}
                initialName={PLAYERS.O}
              />
            </ol>
          </section>
          <TicTacToe
            highlightSelectedPlayer={highlightSelectedPlayerHandler}
            gameBoard={gameBoard}
          />
        </section>
        {(winner || isMatchDraw) && (
          <WinningModal player={winner} onClick={rematchHandler} />
        )}
      </Container>
      <Log gameTurns={gameTurns} />
    </>
  );
}

export default App;
