// Variaveis são um espaço na memória para guardar algum valor
let pesoPeca = 50

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo podemos cadastrar a peca")
} else {
    console.log("Peso insuficiente, não pode cadastrar")
}

let numeroPeca = 10

if(numeroPeca < 10) {
    console.log("Ainda há espaços na caixa, podemos cadastrar a peças")
    } else {
        console.log("Não há espaço disponivel na caixa")
    }

    let nomePeca = "Di"
    console.log("O comprimento do nome da peça e:", nomePeca.length)

    if(nomePeca.length < 3) {
        console.log("Nome de peça muito curto, não é possivel cadastras")
    } else {
        console.log("nome de peça adequado, pode cadastar")
    }