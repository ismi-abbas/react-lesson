import { useState, useEffect } from "react";
import "../MemoryGame.css";

type Card = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const CARD_VALUES = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const initializeGame = () => {
    // Create pairs of cards and shuffle them
    const initialCards: Card[] = [...CARD_VALUES, ...CARD_VALUES]
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(initialCards);
    setMoves(0);
    setFlippedCards([]);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (
      isChecking ||
      flippedCards.length === 2 ||
      cards[id].isFlipped ||
      cards[id].isMatched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      setMoves(moves + 1);
      setIsChecking(true);
      setTimeout(checkForMatch, 1000);
    }
  };

  const checkForMatch = () => {
    const [first, second] = flippedCards;
    const newCards = [...cards];

    if (cards[first].value === cards[second].value) {
      newCards[first].isMatched = true;
      newCards[second].isMatched = true;
    } else {
      newCards[first].isFlipped = false;
      newCards[second].isFlipped = false;
    }

    setCards(newCards);
    setFlippedCards([]);
    setIsChecking(false);
  };

  const isGameComplete =
    cards.length > 0 && cards.every((card) => card.isMatched);

  return (
    <div className="memory-game">
      <div className="game-status">
        <h2>Memory Game</h2>
        <p>Moves: {moves}</p>
        <button onClick={initializeGame}>New Game</button>
        {isGameComplete && <p>Congratulations! You won in {moves} moves!</p>}
      </div>

      <div className="board">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${
              card.isFlipped || card.isMatched ? "flipped" : ""
            } ${card.isMatched ? "matched" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            {(card.isFlipped || card.isMatched) && card.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
