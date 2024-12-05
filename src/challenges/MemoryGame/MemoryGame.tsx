import { useState } from "react";
import "./MemoryGame.css";

// TODO: Define your card type
type Card = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export const MemoryGame = () => {
  // TODO: Initialize your game state here
  const [cards, setCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);

  // TODO: Implement these functions
  const initializeGame = () => {
    // Initialize cards here
  };

  const handleCardClick = (id: number) => {
    // Handle card clicks here
  };

  const checkForMatch = () => {
    // Check if flipped cards match
  };

  return (
    <div className="memory-game">
      <div className="game-status">
        <h2>Memory Game</h2>
        <p>Moves: {moves}</p>
        <button onClick={initializeGame}>New Game</button>
      </div>

      <div className="board">{/* TODO: Render your cards here */}</div>
    </div>
  );
};

export default MemoryGame;
