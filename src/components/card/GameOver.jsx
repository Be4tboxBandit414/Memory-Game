import React from "react";

//Stanley N: The Game Over Component that will display after user has completed the game with the ability to restart the game with the restartGame function.
const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over!</h1>
    <h3>Thanks for playing!</h3>
    <button className="restart-button" onClick={restartGame}>
      Restart Game
    </button>
  </div>
);

export default GameOver;
