/* eslint-disable no-console */
var array = ["Banana", "Apples", "Oranges", "Blueberries"]
console.log(array.shift())
console.log(array.sort())
console.log(array.push("Kiwi"))
console.log(array.shift())
console.log(array.reverse())

var array2 = ["Banana", 
                ["Apples", 
                    ["Oranges"], 
                    "Blueberries"]]
console.log(array2[1][1][0])


