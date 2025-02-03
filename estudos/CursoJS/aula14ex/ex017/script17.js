function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let v = 1
        for (v <= 10; item.text = `${n} x ${v} = ${num*v}`; v++) {
        let item = document.createElement('option')
        tab.appendChild(item)
        }
    }
}