function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('final')
    //var pas = document.getElementById('passo')
    var pas = 0
    var res = document.getElementById('resultado')
    if (ini.value.lenght == 0 || Number(fim.value) == 0) {
        res.innerHTML = 'Impossível contar'
        alert('Por favor, verique se os campos foram preenchidos corretamente')
    } else if (Number(pas.value) == 0){
        alert('Passo inválido! Considerando Passo: 1')
        for(var n1=Number(ini.value);n1<=Number(fim.value);n1++)
        res.innerHTML = `Passo ${n1}`
    }
}