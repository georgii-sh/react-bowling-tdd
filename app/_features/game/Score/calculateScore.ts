function isSpare(rolls: number[], index: number): boolean {
  return rolls[index] + rolls[index + 1] === 10;
}

function isStrike(rolls: number[], index: number): boolean {
  return rolls[index] === 10;
}

function getRollValueOrDefault(rolls: number[], index: number) {
  return rolls[index] ?? 0;
}

function getFrameScore(rolls: number[], index: number): number {
  return (
    getRollValueOrDefault(rolls, index) +
    getRollValueOrDefault(rolls, index + 1)
  );
}

export function calculateScore(rolls: number[], index = 0, frame = 0): number {
  if (rolls.length === 0) {
    return 0;
  }
  if (frame >= 10) {
    return 0;
  }

  if (isStrike(rolls, index)) {
    return (
      10 +
      calculateScore(rolls, index + 1, frame + 1) +
      getRollValueOrDefault(rolls, index + 1) +
      getRollValueOrDefault(rolls, index + 2)
    );
  }

  const score =
    getFrameScore(rolls, index) + calculateScore(rolls, index + 2, frame + 1);

  if (isSpare(rolls, index)) {
    return score + getRollValueOrDefault(rolls, index + 2);
  }

  return score;
}
