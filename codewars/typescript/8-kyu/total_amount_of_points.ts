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

// function points(games: string[]): number {
//   let total = 0
//   let mappedGames = games.map((number) => number.split(''))
//   for (let i = 0; i < mappedGames.length; i++) {
//     if (
//       mappedGames.map((number) => number[0]) >
//       mappedGames.map((number) => number[2])
//     ) {
//       total = total + 3
//     } else if (
//       mappedGames.map((number) => number[0]) <
//       mappedGames.map((number) => number[2])
//     ) {
//       total = total + 0
//     }
//     return total
//   }
//   return total
// }

// points(games)

//   This is a good direction.
//

// const games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]

// function points(games : string[]): number {
// for (let i = 0; i < games.length - 1; i++) {
//   let homeScore = games.map(number => number.split('')).map(number => parseInt(number[0]))
//   let awayScore = games.map(number => number.split('')).map(number => parseInt(number[2]))
//   return awayScore

// const games = [
//   '1:0',
//   '2:0',
//   '3:0',
//   '4:0',
//   '2:1',
//   '3:1',
//   '4:1',
//   '3:2',
//   '4:2',
//   '4:3',
// ]

// function points(games: string[]): number {
//   let total = 0
//   for (let i = 0; i < games.length; i++) {
//     if (
//       games[i]
//         .map((number) => number.split(''))
//         .map((number) => parseInt(number[0])) >
//       games[i + 2]
//         .map((number) => number.split(''))
//         .map((number) => parseInt(number[2]))
//     ) {
//       total = total + 3
//     } else if (
//       games[i]
//         .map((number) => number.split(''))
//         .map((number) => parseInt(number[0])) <
//       games[i + 2]
//         .map((number) => number.split(''))
//         .map((number) => parseInt(number[2]))
//     ) {
//       total = total + 0
//     } else if (
//       games[i]
//         .map((number) => number.split(''))
//         .map((number) => parseInt(number[0])) ==
//       games[i + 2]
//         .map((number) => number.split(''))
//         .map((number) => parseInt(number[2]))
//     ) {
//       total = total + 1
//     }
//   }
//   return total
// }

// points(games)
