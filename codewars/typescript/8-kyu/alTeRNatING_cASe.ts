let soft = 'HeLLo WoRLD'

function toAlternatingCase(soft) {
  const softAsArray = soft.split('')
  const UTFArray = softAsArray.map((letter) => letter.charCodeAt())
}

function toAlternatingCase(soft) {
  const softAsArray = soft.split('')
  const UTFArray = softAsArray.map((letter) => letter.charCodeAt())
  UTFArray.map((number) => {
    if (number <= 90 && number >= 65)
      return String.fromCharCode(number).toLowerCase()
    else if (number <= 122 && number >= 97)
      return String.fromCharCode(number).toUpperCase()
    else return number
  })
}
