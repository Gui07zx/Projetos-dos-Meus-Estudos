function contar() {
    let start = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let step = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert(`[ERRO] Faltam dados!`)
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if (p <= 0) {
            alert(`Passo ínvalido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } //contagem crescente


        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } //contagem decrescente
        }
        res.innerHTML += `\u{1F3C1}`
    }
}