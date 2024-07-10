function isStrike(rolls: number[], index: number): boolean {
  return rolls[index] === 10;
}

function isSpare(rolls: number[], index: number): boolean {
  return rolls[index] + rolls[index + 1] === 10;
}

function strikeBonus(rolls: number[], index: number): number {
  return (rolls[index + 1] ?? 0) + (rolls[index + 2] ?? 0);
}

function spareBonus(rolls: number[], index: number): number {
  return rolls[index + 2] ?? 0;
}

function sumOfBallsInFrame(rolls: number[], index: number): number {
  return (rolls[index] ?? 0) + (rolls[index + 1] ?? 0);
}

export function calculateScore(
  rolls: number[],
  currentIndex: number = 0,
  frame: number = 1
): number {
  if (frame > 10) {
    return 0;
  }

  if (isStrike(rolls, currentIndex)) {
    return (
      10 +
      strikeBonus(rolls, currentIndex) +
      calculateScore(rolls, currentIndex + 1, frame + 1)
    );
  } else if (isSpare(rolls, currentIndex)) {
    return (
      10 +
      spareBonus(rolls, currentIndex) +
      calculateScore(rolls, currentIndex + 2, frame + 1)
    );
  } else {
    return (
      sumOfBallsInFrame(rolls, currentIndex) +
      calculateScore(rolls, currentIndex + 2, frame + 1)
    );
  }
}
