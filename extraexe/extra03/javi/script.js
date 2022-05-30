function contar() {
    var start = document.getElementById('inicio')
    var end = document.getElementById('final')
    var step = document.getElementById('passo')
    var res = document.getElementById('resultado')
    var str = Number(start.value)
    var ed = Number(end.value)
    var stp = Number(step.value)
    if (str < 0 || ed <= 0 || str == ed) {
        alert('[ERRO] Verifique se os campos foram preenchidos corretamente!')
    } else if (stp <=0) {
        alert('[ERRO] Passo inválido, recalculando com o valor: 1')
        for(var s = str;s <= ed; s++) {
            res.innerHTML += `\u{27A1}${s} `
        }
    }else {
        for(var s = stp; s <= ed; s += stp) {
            res.innerHTML += `${s}\u{27A1} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}