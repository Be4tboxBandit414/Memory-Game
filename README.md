https://be4tboxbandit414.github.io/Memory-Game/

# Memory-Game

Hello! This is a memory card game consisting of 24 cards. To win you, must match each card one by one with the corresponding value. Feel free to click the "Restart Game" button at the top should you feel you need to reset the game. 

Technicals:

This was built via create-react-app and thus built via the React library. "react-card-flip" is the library used to help with the flipping animation on click of a card. Styling is done in CSS. 



Major Components are Card.jsx, Header.jsx, and GameOver.jsx. 

Card.jsx contains logic for each card and imports ReactCardFlip from "react-card-flip" library as a component to help with flip animation.

Header.jsx is a simple component that primarly holds the restart button for the game. 

GameOver.jsx is a component that displays when the user wins the game and offers the user an opportunity to restart the game.



App.js holds the bulk of the logic for the application. It utilizes a PureComponent to ensure speed. Initial state of the application 
consists of the following: isFlipped, shuffledCard, clickCount, prevSelectedCard, prevCardId, and clickDisabled.


________________________________________________________________________________________________________________________________________
STATE:

isFlipped: Array of 24 with false to begin

shuffledCard: Shuffles the values and sorts them

clickCount: Click number indicator that resets to 1 after the second card is clicked in handleClick()

prevSelectedCard: Previously selected card initiated at -1 for safety since the numbers go from 1 to 12

prevCardId: Previous Card ID initiated at -1 for safety

clickDisabled: Initally set to false to allow user to click. If state is changed to true then the cards cannot be clicked on.
________________________________________________________________________________________________________________________________________

KEY FUNCTIONS AND METHODS:

duplicateCard: Duplicates inital values in array.

handleClick: Click handler that grabs the id of card clicked and sets it as previously selected card. Checks to see if card clicked is flipped or not. It also checks for the click count and resets the state if necessary. 

isCardMatch: Checks for card match by comparing the two cards that are clicked. Flips card if not matched and hides card if matched. Is called in handleClick.

restartGame: Resets the state to restart the game.

render: Renders Application with Header Component, GameOver Component, and Card Component. shuffledCard is called to shuffle and randomly give props to each Card Component.
>>>>>>> dbf268c27273bbfe4e5c293e0e462576dbaaf80b
