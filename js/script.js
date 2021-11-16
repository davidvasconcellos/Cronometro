let segundos = 0
let centesimos = 0
let intervalo
function contagem() {
    centesimos++
    document.getElementsByTagName("h2")[0].innerHTML = `${segundos}.${centesimos}`
    if (centesimos == 99) {
        centesimos = 0
        segundos++
    }
}
function iniciar() {
    clearInterval(intervalo)
    intervalo = setInterval(contagem, 10)
}
function parar() {
    clearInterval(intervalo)
}
const zerar = () => {
    clearInterval(intervalo)
    segundos = 0
    centesimos = 0
    document.getElementsByTagName("h2")[0].innerHTML = `${segundos}.${centesimos}0`
}