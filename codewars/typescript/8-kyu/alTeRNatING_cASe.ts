function toAlternatingCase(soft) {
  const softAsArray = soft.split('')
  const UTFArray = softAsArray.map((letter) => letter.charCodeAt()) //<--- needed a 0 as an argument to satisfy typescript!!!
  let numberString = ''
  let numberStringConverter = ''

  let transformedArray = UTFArray.map((number) => {
    if (number <= 90 && number >= 65) {
      return String.fromCharCode(number).toLowerCase()
    } else if (number <= 122 && number >= 97) {
      return String.fromCharCode(number).toUpperCase()
    } else return String.fromCharCode(number)
  })
  return transformedArray.join('')
}

let soft = 'HellO WorlD'

toAlternatingCase(soft)
