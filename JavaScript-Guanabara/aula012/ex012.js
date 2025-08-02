var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom dia, Flor do Dia`)
} else if (hora <= 18) {
    console.log (`Japodi ao Moçar`)
} else {
    console.log(`Durma, seu moleque!`)
}