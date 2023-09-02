let InputTexto = document.getElementById("number")
let Boton = document.getElementById("boton")
let Parrafo = document.getElementById("texto-resultado")
let Intentos = document.getElementById("intentos")

let NumeroRandom = Math.random() * 10 + 1
let Redondear = Math.floor(NumeroRandom)

function VerParrafo() {
    
    if (InputTexto.value == Redondear) {
        Parrafo.classList.add("animate__shakeY")
        Parrafo.textContent = "¡Felicidades! Has acertado el numero. Refresca la pagina para volver a jugar"
        Parrafo.style.color = "Green"
    }
    else if (InputTexto.value > 10) {
        Parrafo.textContent = "¡Debes introducir un numero entre 0 y 10!"
    }
    else if (InputTexto.value < 0) {
        Parrafo.textContent = "¡Debes introducir un numero entre 0 y 10!"
    }
    else if (InputTexto.value !== Redondear) {
        Parrafo.textContent = "¡Inténtalo de nuevo!"
        Parrafo.style.color = "Red"
        InputTexto.value = ""
    }
    Intentos.textContent++;
}

