function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resu = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            gender = 'Homem'
            if (idade >=0 && idade < 3) {
                //Bêbe
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (sexo[1].checked) {
            gender = 'Mulher'
            if (idade >=0 && idade < 3) {
                //Bêbe
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        resu.style.textAlign = 'center'
        resu.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        resu.appendChild(img)
    }
}