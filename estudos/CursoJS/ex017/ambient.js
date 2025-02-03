let num = [24, 77, 3, 5]
num[4] = 90
num[0] = 1
num.push(2)
num.push(84)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`O último valor do meu array é ${num[6]}`)
let pos = num.indexOf(100)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}
/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} contém o valor ${num[pos]}`)
}*/

/*for (let pos in num) {
    console.log(`A posição ${pos} contém o valor ${num[pos]}`)
}*/