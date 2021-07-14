let palette = document.querySelector("#color-palette")


//criando linhas
const pxBoardList = document.querySelector("#pixel-board")
function addLi() {

    for (let i = 1; i <= 5; i += 1) {
        const pxColuna = document.createElement("ul")
        pxColuna.className = "coluna"
        pxBoardList.appendChild(pxColuna)

        for (let i2 = 1; i2 <= 5; i2 += 1) {
            const pxLinha = document.createElement("li")
            pxLinha.className = "pixel"
            pxColuna.appendChild(pxLinha)

        }
    }
}
addLi()

// o elemento que estiver com a class selected deve ser o selecionado
// sempre que eu clicar em outra boxColor a class selected deve ser alterada para o elemento selecionado


palette.addEventListener("click", selectColors)

function selectColors(event) {
    let allBoxCollors = palette.children

    for (i = 0; i < allBoxCollors.length; i += 1) {
        allBoxCollors[i].classList.remove("selected")
    }
    event.target.classList.toggle("selected")
}

// quando eu clicar na posição de array ele deve ser colorido com a cor selecionada

let selectedPixel = document.querySelectorAll(".pixel")

selectedPixel.addEventListener("click", coloredPixel)
function coloredPixel(event) {
    event.target.style.backgroundColor = "black"
}