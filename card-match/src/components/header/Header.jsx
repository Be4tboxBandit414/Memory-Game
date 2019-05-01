import React from "react";

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
