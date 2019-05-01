import React from "react";
import ReactCardFlip from "react-card-flip";

/* Stanley N.: This is the Card Component. The logic below displays how the card behaves -- whether it is on its front or the back (the back displays the value as 'cardnumber').

handleClick is the function associated with the onClick event and can be found in App.js. 

clickCheck checks for true or false which would enable or disable the card to be clicked on to help prevent multiple cards being selected */
const Card = ({ id, isFlipped, handleClick, cardNumber, clickCheck }) => (
  <ReactCardFlip
    isFlipped={isFlipped}
    flipSpeedBackToFront={1}
    flipSpeedFrontToBack={1}
  >
    <button
      id={id}
      className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`}
      onClick={handleClick}
      key="front"
      disabled={clickCheck}
    />

    <button
      id={id}
      className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`}
      onClick={handleClick}
      key="back"
    >
      {cardNumber}
    </button>
  </ReactCardFlip>
);

export default Card;
