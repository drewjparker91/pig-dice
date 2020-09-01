import Player from './../src/scripts.js';
import { TestScheduler } from 'jest';

describe('Player', () => {

  test('should generate a number between 1 and 6', () => {
    const player = new Player();
    player.rollDice();
    expect(player.roll <= 6 && player.roll >= 1).toBe(true);
    
  });

  test('should add random roll to turn score', () => {
    const player = new Player();
    player.rollDice();
    expect(player.roll === player.turnScore).toBe(true);
  });

  test('should add turn score to overall score',() => {
    const player = new Player();
    player.addScore();
    expect(player.turnScore === player.overallScore).toBe(true);
  });

});

