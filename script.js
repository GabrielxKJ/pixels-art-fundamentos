
//criando linhas
const pxBoardList = document.querySelector("#pixel-board")
function addLi(){

    for(let i = 1; i <= 5; i += 1){
        const pxColuna= document.createElement("ul")
        pxColuna.className ="coluna"
        pxBoardList.appendChild(pxColuna)
        
    for(let i2 = 1; i2 <= 5; i2 += 1){
        const pxLinha = document.createElement("li")
        pxLinha.className ="pixel"
        pxColuna.appendChild(pxLinha)
    
    }

    }
}
addLi()

window.onload = function selectBlack(){
    let boxBlack = document.querySelector(".boxColor1")
    boxBlack.classList.add('selected')
    }