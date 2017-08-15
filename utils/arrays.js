var allLanguages = []
var languages = ['JavaScript', 'Ruby', 'Phython', 'CSS']
var moreLanguages = {
  html: 'HTML',
  php: 'php'
}

export function mapper() {
  return Object.keys(moreLanguages).map(function(key) {
    var items = moreLanguages[key]
    console.log('mapper: ', items)
    return items
  })
}

export function concatArrays() {
  var newArray = languages.concat(mapper())
  console.log(newArray)
}

mapper()
concatArrays()
