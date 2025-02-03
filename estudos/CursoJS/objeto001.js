let game = {
    nome: 'Marvel Snap',
    estilo: 'cardgame',
    jogandoagora: 115.80,
    ontem(ja = 0) {
        console.log('Jogaram ontem')
        this.jogandoagora += ja
    }
}
game.ontem(500)
console.log(`${game.nome} ${game.jogandoagora} players `)