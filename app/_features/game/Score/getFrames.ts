export function getFrames(rolls: number[]): number[][] {
  const frames: number[][] = [[]];
  for (const roll of rolls) {
    const lastFrame = frames[frames.length - 1];
    if ((lastFrame.length === 2 || lastFrame[0] === 10) && frames.length < 10) {
      frames.push([]);
    }
    frames[frames.length - 1].push(roll);
  }
  return frames;
}
