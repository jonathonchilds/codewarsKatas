function toAlternatingCase(soft) {
  const softAsArray = soft.split('')
  const UTFArray = softAsArray.map((letter) => letter.charCodeAt())
  let numberString = ''
  let numberStringConverter = ''

  let transformedArray = UTFArray.map((number) => {
    if (number <= 90 && number >= 65) {
      numberString = String.fromCharCode(number)
      numberStringConverter = numberString.toLowerCase()
      return numberStringConverter
    } else if (number <= 122 && number >= 97) {
      numberString = String.fromCharCode(number)
      numberStringConverter = numberString.toUpperCase()
      return numberStringConverter
    } else return String.fromCharCode(number)
  })
  return transformedArray
}

let soft = 'HellO WorlD'

toAlternatingCase(soft)

// let soft = 'HeLLo WoRLD'

// function toAlternatingCase(soft) {
//   const softAsArray = soft.split('')
//   const UTFArray = softAsArray.map((letter) => letter.charCodeAt())
// }
