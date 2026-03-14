/**
 * Test cases for slugify function
 * Run with: npm test -- slugify.test.ts
 */

import { slugify, unslugify } from '@/app/utils/slugify';

describe('slugify', () => {
  describe('basic functionality', () => {
    test('converts simple titles to lowercase slugs', () => {
      expect(slugify('Neon Velocity')).toBe('neon-velocity');
      expect(slugify('Idle Sprint Race 3D')).toBe('idle-sprint-race-3d');
      expect(slugify('Knife Ring IO')).toBe('knife-ring-io');
      expect(slugify('Hyper Cakes')).toBe('hyper-cakes');
    });

    test('handles mixed case', () => {
      expect(slugify('NeoN VeLoCiTy')).toBe('neon-velocity');
      expect(slugify('neon-velocity')).toBe('neon-velocity');
    });

    test('removes special characters', () => {
      expect(slugify('Game!@#$%')).toBe('game');
      expect(slugify('Game: The Sequel')).toBe('game-the-sequel');
      expect(slugify("Game's Story")).toBe('games-story');
      expect(slugify('Game (2024)')).toBe('game-2024');
    });

    test('replaces spaces with hyphens', () => {
      expect(slugify('Space Runner')).toBe('space-runner');
      expect(slugify('Space  Double  Spaces')).toBe('space-double-spaces');
    });

    test('handles multiple spaces and hyphens', () => {
      expect(slugify('Game - Name')).toBe('game-name');
      expect(slugify('Game  --  Name')).toBe('game-name');
    });

    test('removes leading and trailing hyphens', () => {
      expect(slugify('-game')).toBe('game');
      expect(slugify('game-')).toBe('game');
      expect(slugify('--games--')).toBe('games');
    });

    test('handles numbers', () => {
      expect(slugify('Game 2')).toBe('game-2');
      expect(slugify('3D Racing')).toBe('3d-racing');
      expect(slugify('Game2048')).toBe('game2048');
    });

    test('handles underscores', () => {
      expect(slugify('Game_Name')).toBe('game-name');
      expect(slugify('Game__Double__Underscore')).toBe('game-double-underscore');
    });
  });

  describe('edge cases', () => {
    test('handles empty strings', () => {
      expect(slugify('')).toBe('');
      expect(slugify('   ')).toBe('');
    });

    test('handles only special characters', () => {
      expect(slugify('!@#$%^&*()')).toBe('');
      expect(slugify('---')).toBe('');
    });

    test('handles very long titles', () => {
      const longTitle = 'A'.repeat(100) + ' Game';
      expect(slugify(longTitle)).toBe('a-game');
    });

    test('handles unicode and accented characters', () => {
      expect(slugify('Café Game')).toBe('caf-game');
      expect(slugify('Naïve Runner')).toBe('nave-runner');
    });

    test('handles consecutive special characters', () => {
      expect(slugify('Game!!!Name')).toBe('gamename');
      expect(slugify('Game...Name')).toBe('gamename');
    });
  });

  describe('real world examples', () => {
    test('from mock.js examples', () => {
      expect(slugify('Neon Velocity')).toBe('neon-velocity');
      expect(slugify('Idle Sprint Race 3D')).toBe('idle-sprint-race-3d');
      expect(slugify('Knife Ring IO')).toBe('knife-ring-io');
      expect(slugify('Hyper Cakes')).toBe('hyper-cakes');
    });

    test('common game title patterns', () => {
      expect(slugify('Game: Quest')).toBe('game-quest');
      expect(slugify('Game - Origins')).toBe('game-origins');
      expect(slugify('Game [Remastered]')).toBe('game-remastered');
      expect(slugify('Game (Premium)')).toBe('game-premium');
      expect(slugify('Game 2: The Sequel')).toBe('game-2-the-sequel');
    });

    test('single words', () => {
      expect(slugify('Tetris')).toBe('tetris');
      expect(slugify('Pacman')).toBe('pacman');
      expect(slugify('Mario')).toBe('mario');
    });
  });

  describe('URL safety', () => {
    test('produces valid URL paths', () => {
      const testCases = [
        'Neon Velocity',
        'Idle Sprint Race 3D',
        'Game!@#$%^&*()',
        'Game---Name',
        'Game   Multiple   Spaces',
      ];

      testCases.forEach((testCase) => {
        const slug = slugify(testCase);
        // URL should not contain special characters
        expect(slug).not.toMatch(/[^a-z0-9-]/);
        // Should not start or end with hyphen
        expect(slug).not.toMatch(/^-|-$/);
      });
    });
  });

  describe('deterministic', () => {
    test('same input always produces same output', () => {
      const title = 'Random Game Title 3D!@#$';
      const result1 = slugify(title);
      const result2 = slugify(title);
      expect(result1).toBe(result2);
    });

    test('multiple variations of same game produce same slug', () => {
      expect(slugify('Neon Velocity')).toBe(slugify('neon velocity'));
      expect(slugify('Neon Velocity')).toBe(slugify('NEON VELOCITY'));
      expect(slugify('Neon Velocity')).toBe(slugify(' neon velocity '));
    });
  });
});

describe('unslugify', () => {
  test('reverses slugs to title case', () => {
    expect(unslugify('neon-velocity')).toBe('Neon Velocity');
    expect(unslugify('idle-sprint-race-3d')).toBe('Idle Sprint Race 3d');
    expect(unslugify('knife-ring-io')).toBe('Knife Ring Io');
  });

  test('handles edge cases', () => {
    expect(unslugify('')).toBe('');
    expect(unslugify('single')).toBe('Single');
  });

  note: 'unslugify is for reference/fallback only. Always use the actual game title from database.';
});

/**
 * Performance test (optional)
 * Ensure slugify performs well with 6000+ calls
 */
describe('performance', () => {
  test('can slugify 6000+ games in reasonable time', () => {
    const mockGames = Array.from({ length: 6000 }, (_, i) => `Game Title ${i}`);

    const start = performance.now();
    mockGames.forEach(title => slugify(title));
    const end = performance.now();

    const duration = end - start;
    console.log(`Slugified 6000 games in ${duration.toFixed(2)}ms`);

    // Should complete in under 100ms
    expect(duration).toBeLessThan(100);
  });
});
