//console.log(num[0]) mostra o valor na primeira posição
//console.log(num.length) mostra quantos valores foram definidos na array
//num.sort() coloca os valores em ordem crescente 
//num.push(1) adiciona o valor solicitado no final ultima posição da array

let num = [5, 8, 2, 9, 35, 7, 6, 4]
num.push(28)
num.sort((function(a, b){return a-b}))
for (let pos = 0; pos<num.length;pos++) {
    console.log(num[pos])
}

