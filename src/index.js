import validator from './validator.js';

let btnCard = document.querySelector("#btnValid");
let respCard = document.querySelector("#outCard");

btnCard.addEventListener('click', validadorCard);

function validadorCard() {
    let numCard = document.querySelector("#nCartao").value; // parseInt()

    let resultMasky = validator.maskify(numCard);
    
    let resultadoFinal = validator.isValid(numCard); // argumento

    if (numCard === "") {
        return respCard.innerText = "Digite o número do cartão";
    }
    else if (resultadoFinal == true) {
       
        alert(resultMasky + "Parabéns, pagamento efetuado com sucesso")
    
    }
    else {
        
        alert(resultMasky + " Insira o cartão novamente, erro no cartão")
    

        
    } 

}


     









