let num = [5, 6, 7, 9, 45, 98, 4, 55, 62, 42]
num.sort((function(a, b){return a-b}))
for(let pos in num) {
    console.log(num[pos])
}

//forma mais simples
//num.sort((function(a, b){return a-b})) fazer organização dos números
//num.indexOf(valor) procura o valor dentro da array e retorna com a key se encontrar, se não, retorna -1