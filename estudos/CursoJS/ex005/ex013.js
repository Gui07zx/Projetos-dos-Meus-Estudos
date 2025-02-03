var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são examente ${hora} horas.`)
if (hora >= 5 && hora <= 12) {
    console.log('Tenha um bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Tenha uma boa tarde!')
} else if (hora > 18 && hora < 24) {
    console.log('Tenha uma boa noite!')
} else {
    console.log('Tenha uma boa madrugada!')
}