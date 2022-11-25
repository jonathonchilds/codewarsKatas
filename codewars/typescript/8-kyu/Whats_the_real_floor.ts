export function getRealFloor(n: number): number {
  if (n > 0 && n <= 13) return n - 1
  else if (n >= 14) return n - 2
  else return n
}
