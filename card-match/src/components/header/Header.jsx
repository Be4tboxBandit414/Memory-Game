import React from "react";

//Stanley N: This is the Restart Game Component that exists at the top of the application. It allows user to restart the game at any time by the restartGame function.
const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="restart-container">
      <button onClick={restartGame} className="restart-button">
        Restart Game
      </button>
    </div>
  </div>
);

export default Header;
