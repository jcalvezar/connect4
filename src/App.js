import React, { useState, useEffect } from "react";
import "./App.css";
import Connect4 from "./connect4";

function App() {
  const [game, setGame] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setGame(new Connect4());
    console.log("Creando Instancia");
  }, []);

  return (
    <>
      {winner ? (
        <div className="principal">Player {winner} Wins!</div>
      ) : (
        <div className="principal">Player ID: {currentPlayer}</div>
      )}

      <div className="principal">
        {game &&
          game.board.map((column, idx) => (
            <div className="column" key={idx}>
              <button
                onClick={() => {
                  game.addChipToColumn(idx);
                  setCurrentPlayer(game.actualPlayerId);
                  if (game.gotWinner) {
                    setWinner(game.gotWinner);
                    console.log("Ganador: ", winner);
                  }
                }}
                key={idx + 1000}
              >
                Add Chip
              </button>
              {column
                .slice(0)
                .reverse()
                .map((chip, idx2) => (
                  <img
                    src={"imgs/player" + chip + ".png"}
                    className="chip"
                    key={idx2}
                    alt={"image " + idx2}
                  />
                ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
