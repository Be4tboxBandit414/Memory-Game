<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
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
