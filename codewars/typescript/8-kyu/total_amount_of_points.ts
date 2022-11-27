// Our team's match results are recorded in a collection of strings.
// Each match is represented by a string in the format "x:y", where x is
// our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns
// the number of points our team (x) got in the championship by the rules given above.

// Notes:

//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

//FINALLY.... THE SOLUTION! (It was so simple once I'd broken it down and processed each step)

export function points(games: string[]): number {
  var homeScores = games
    .map((number) => number.split(''))
    .map((number) => parseInt(number[0]))
  var awayScores = games
    .map((number) => number.split(''))
    .map((number) => parseInt(number[2]))
  var counter = 0

  for (let i = 0; i < games.length; i++) {
    if (homeScores[i] > awayScores[i]) {
      counter = counter + 3
    }
    if (homeScores[i] < awayScores[i]) {
      counter = counter + 0
    }
    if (homeScores[i] == awayScores[i]) {
      counter = counter + 1
    }
  }
  return counter
}

// OTHER SOLUTIONS:
//
//
//
// export function points(games : string[]): number {
//   return games.reduce((prev, curr) => {
//     const [ourTeamScore, opponentScore] = curr.split(':');

//     if (ourTeamScore === opponentScore) return prev + 1;

//     if (ourTeamScore > opponentScore) {
//       return prev + 3;
//     } else {
//       return prev;
//     }
//   }, 0);
// }
//
//-----------------------------------------
//
//export const points = (games : string[]): number =>
// games.reduce((sum, score) => {
//   const goals = score.split(':')
//   return sum + (goals[0] > goals[1] ? 3 : goals[0] < goals[1] ? 0 : 1)
// }, 0)
//
//-----------------------------------------
//
// Export function points(games : string[]): number {
//   let teamTotal = 0
//   for (let i of games) {
//     if (+i[0] > +i[2]) teamTotal += 3
//     else if (+i[0] < +i[2]) continue
//     else if (+i[0] === +i[2]) teamTotal++
//       continue
//   }
//   return teamTotal
// }
//
//-----------------------------------------
//
//export function points(games: string[]): number {
//   const results = games.map((v) => [+v.split(":")[0], +v.split(":")[1]])
//   return results.reduce((a, [x, y]) => (x > y ? a + 3 : x === y ? a + 1 : a), 0)
// }
