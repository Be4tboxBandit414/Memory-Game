import React, { PureComponent } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import GameOver from "./components/card/GameOver";

import "./styles/main.css";

/* 
Stanley N: Using PureComponent since not needing the full extent of component and is the fastest component we can write.

state of the application consists of the following: isFlipped, shuffledCard, clickCount, prevSelectedCard, prevCardId, and clickDisabled

isFlipped: Array of 24 with false to begin

shuffledCard: Shuffles the values and sorts them

clickCount: Click number indicator that resets to 1 after the second card is clicked in handleClick()

prevSelectedCard: Previously selected card initiated at -1 for safety since the numbers go from 1 to 12

prevCardId: Previous Card ID initiated at -1 for safety

clickDisabled: Initally set to false to allow user to click. If state is changed to true then the cards cannot be clicked on.
*/
class App extends PureComponent {
  state = {
    isFlipped: Array(24).fill(false),
    shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5),
    clickCount: 1,
    prevSelectedCard: -1,
    prevCardId: -1,
    clickDisabled: false
  };

  // Stanley N: Duplicates inital values in array
  static duplicateCard = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce(
      (preValue, current, index, array) => {
        return preValue.concat([current, current]);
      },
      []
    );
  };

  // Stanley N: Click handler that grabs the id of card clicked and sets it as previously selected card.
  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    this.setState({
      prevSelectedCard: this.state.shuffledCard[cardId],
      prevCardId: cardId
    });

    // Stanley N: Checks to see if card clicked is flipped or not.
    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      }));

      // Stanley N: Checks also the click count and resets the clickCount state to 1 if second is clicked. Also setting clickDisabled state to true to prevent mulitple clicks after the second click with a setTimeout to allow for animation and resetting clickDisabled to false to allow user to continue.
      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        this.setState({ clickDisabled: true });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
        setTimeout(() => {
          this.setState(prevState => ({
            clickDisabled: false
          }));
        }, 1500);
      }
    }
  };

  // Stanley N: Check for card match by comparing the two cards that are clicked. Flips card if not matched and hides card if matched. Is called in handleClick.
  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledCard: hideCard
        }));
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  // Stanley N: Restarts the game by resetting the state. Is called in Header component and GameOver component.
  restartGame = () => {
    this.setState({
      isFlipped: Array(24).fill(false),
      shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
  };

  // Stanley N: Checks for every card is matched. Is called in the render.
  isGameOver = () => {
    return this.state.isFlipped.every(
      (element, index, array) => element !== false
    );
  };

  // Stanley N: Renders Application with Header Component, GameOver Component, and Card Component. shuffledCard is called to shuffle and randomly give props to each Card Component.
  render() {
    return (
      <div>
        <Header restartGame={this.restartGame} />
        {this.isGameOver() ? (
          <GameOver restartGame={this.restartGame} />
        ) : (
          <div className="grid-container">
            {this.state.shuffledCard.map((cardNumber, index) => (
              <Card
                key={index}
                id={index}
                cardNumber={cardNumber}
                isFlipped={this.state.isFlipped[index]}
                handleClick={this.handleClick}
                clickCheck={this.state.clickDisabled}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
