//
//
//
//         My solution
export function hero(bullets: number, dragons: number): boolean {
  return bullets >= dragons * 2 ? true : false
}

// I really tried to get this to work without explicitly using
// a return statement. Turns out I have to use the curly braces
// with a function return. I can omit curly braces only when
// exporting a constant/variable, such as:
//export const hero = (bullets: number, dragons: number): boolean => bullets >= dragons * 2;
//
// The below example is a more concise way to write as I did for my solution.
// export function hero(bullets: number, dragons: number): boolean {
//   return bullets >= dragons * 2
// }
