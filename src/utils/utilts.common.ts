export const cycleIndex = (array: any[]) => (index: number) =>
  (index + 1) % array.length;

export function print(anything: any) {
  console.log(JSON.stringify(anything, null, 2));
}

export function randomBetween(
  min: number,
  max: number,
  decimal?: number | undefined
) {
  const rand = Math.random() * (max - min) + min;
  return decimal !== undefined ? Number(rand.toFixed(decimal)) : rand;
}
