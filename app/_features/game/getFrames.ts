export function getFrames(rolls: number[]): number[][] {
  if (rolls.length === 0) {
    return [[]];
  }
  const frames: number[][] = [[]];
  rolls.forEach((roll) => {
    const lastFrame = frames[frames.length - 1];
    if (frames.length < 10 && (lastFrame.length > 1 || lastFrame[0] === 10)) {
      frames.push([]);
    }
    if (
      frames[frames.length - 1].length < 2 ||
      (lastFrame[0] + roll >= 10 && frames[frames.length - 1].length < 3)
    ) {
      frames[frames.length - 1].push(roll);
    }
  });

  return frames;
}
