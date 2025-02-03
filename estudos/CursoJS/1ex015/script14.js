function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML= `Detectamos uma pessoa com o gênero ${genero} com ${idade} anos.`
    res.appendChild(img)
}