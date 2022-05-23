let num = [5, 6, 7, 9, 45, 98, 4, 55, 62, 42]
num.sort((function(a, b){return a-b}))
console.log(`${num}`)
console.log(num.indexOf(42))
console.log(num.indexOf(32))  