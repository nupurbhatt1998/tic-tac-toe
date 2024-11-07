import { Button, Grid2 } from "@mui/material";
import styles from "./TicTacToe.module.css";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToe = ({ highlightSelectedPlayer, gameTurns }) => {
  
  let gameBoard = initialBoard;
  // with of value is aasigned to gameTurn, therefore an empty object is assigned in case of empty array
  // with in index is assigned to gameTurn ,i.e '0' therefore destructing it results in undefined
  for(var gameTurn of gameTurns){
    const {square, player} = gameTurn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }

//   const changeHandler = (rowIndex, colIndex) => {
//     setGameBoard((initialBoard) => {
//       let updatedBoard = [...initialBoard.map((innerArray) => [...innerArray])];
//       if (updatedBoard[rowIndex][colIndex] == null) {
//         updatedBoard[rowIndex][colIndex] = playerSymbol;
//         console.log(playerSymbol,"tic")
//       }
//       return updatedBoard;
//     });
//     highlightSelectedPlayer();
//   };
  return (
    <Grid2 container columnSpacing={4} rowSpacing={1} maxWidth={"20%"}>
      {gameBoard.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <Grid2
            key={colIndex}
            item
            size={{ sm: 4, md: 4, sx: 4 }}
            textAlign="center"
          >
            <Button
              variant="contained"
              className={styles.customButton}
              onClick={() => highlightSelectedPlayer(rowIndex, colIndex)}
            >
              {col}
            </Button>
          </Grid2>
        ))
      )}
      {/* {Array(9)
            .fill()
            .map((_, index) => (
              <Grid2 key={index} item size={{ sm: 4, md: 4, sx: 4 }} textAlign="center">
                <Button variant="contained" className={styles.customButton} onClick={changeHandler}></Button>
              </Grid2>
            ))} */}
    </Grid2>
  );
};

export default TicTacToe;
