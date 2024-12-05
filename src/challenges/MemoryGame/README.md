# Memory Card Game Challenge

## Objective
Create a memory card game where players need to match pairs of cards. This challenge will test your understanding of React state management, effects, and component composition.

## Requirements

1. Create a grid of cards (4x4 = 16 cards, making 8 pairs)
2. Each card should have a hidden value/image
3. Cards should flip when clicked
4. Players can only flip two cards at a time
5. If the cards match, they stay face up
6. If they don't match, both cards flip face down
7. Track the number of moves made
8. Add a "New Game" button to reset the game
9. Display a victory message when all pairs are found

## Implementation Details

### Components to Create:
- `Card`: Individual card component
- `Board`: Grid of cards
- `GameStatus`: Display moves and game state
- `MemoryGame`: Main game component

### State Management:
- Track flipped cards
- Track matched pairs
- Track number of moves
- Track game completion status

### Bonus Features (Optional):
- Add animations for card flips
- Add a timer
- Add difficulty levels (different grid sizes)
- Add a high score system

## Tips
- Use React's useState and useEffect hooks
- Consider using CSS Grid or Flexbox for the card layout
- Think about the best way to structure your game state

Good luck! 🎮
