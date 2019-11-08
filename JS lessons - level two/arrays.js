var arr = ['a','b','c']

function addText(input) {
  console.log(input + " and text added")
}

arr.forEach(addText)
arr.forEach(console.log)

