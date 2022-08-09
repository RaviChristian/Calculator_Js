const display = document.querySelector(".display");

// Botoes:
const buttonOne = document.querySelector("#buttonOne")
const buttonTwo = document.querySelector("#buttonTwo")
const buttonThree = document.querySelector("#buttonThree")
const buttonFour = document.querySelector("#buttonFour")
const buttonFive = document.querySelector("#buttonFive")
const buttonSix = document.querySelector("#buttonSix")
const buttonSeven = document.querySelector("#buttonSeven")
const buttonEight = document.querySelector("#buttonEight")
const buttonNine = document.querySelector("#buttonNine")
const buttonZero = document.querySelector("#buttonZero")
const buttonPlus = document.querySelector("#buttonPlus")
const buttonMinus = document.querySelector("#buttonMinus")
const buttonDivide = document.querySelector("#buttonDivide")
const buttonMultiply = document.querySelector("#buttonMultiply")
const buttonEqual = document.querySelector("#buttonEqual")
const buttonAC = document.querySelector("#buttonAC")
const buttonDEL = document.querySelector("#buttonDEL")
const buttonDot = document.querySelector("#buttonDot")


// buttonOne buttonTwo buttonThree buttonFour buttonFive buttonSix
// buttonSeven buttonEight buttonNine buttonZero buttonPlus
// buttonMinus buttonDivide buttonMultiply buttonEqual buttonAC
// buttonDEL buttonDot
buttonOne.addEventListener("click",function(e){
    adicionarValor(buttonOne);
})
buttonTwo.addEventListener("click",function(e){
    adicionarValor(buttonTwo);
})
buttonThree.addEventListener("click",function(e){
    adicionarValor(buttonThree);
})
buttonFour.addEventListener("click",function(e){
    adicionarValor(buttonFour);
})
buttonFive.addEventListener("click",function(e){
    adicionarValor(buttonFive);
})
buttonSix.addEventListener("click",function(e){
    adicionarValor(buttonSix);
})
buttonSeven.addEventListener("click",function(e){
    adicionarValor(buttonSeven);
})
buttonEight.addEventListener("click",function(e){
    adicionarValor(buttonEight);
})
buttonNine.addEventListener("click",function(e){
    adicionarValor(buttonNine);
})
buttonZero.addEventListener("click",function(e){
    adicionarValor(buttonZero);
})

// OPERACOES

buttonPlus.addEventListener("click",function(e){
    adicionarOperacao(buttonPlus);
})
buttonMinus.addEventListener("click",function(e){
    adicionarOperacao(buttonMinus);
})
buttonDivide.addEventListener("click",function(e){
    adicionarOperacao(buttonDivide);
})
buttonMultiply.addEventListener("click",function(e){
    adicionarOperacao(buttonMultiply);
})

// PONTO

buttonDot.addEventListener("click",function(e){
    adicionarOperacao(buttonDot);
})

// FUNCOES

buttonEqual.addEventListener("click",function(e){
    equal();
})
buttonAC.addEventListener("click",function(e){
    ac();
})
buttonDEL.addEventListener("click",function(e){
    del();
})



function ac(){
    display.textContent = "";
}

function del(){
    if (display.textContent.length > 0){
        let lastDigit = display.textContent.length -1;
        let displayText = display.textContent;
        display.textContent = (displayText.substring(0,lastDigit));
    }
}

function limitarTamanho(){
    if(display.textContent.length < 11){
        return true;
    }
    else {
        return false;
    }
};

function adicionarValor(valor){
    if (limitarTamanho()){
        display.textContent += valor.textContent;
        console.log(display.textContent);
        console.log(display.textContent.length);
    }
};

function isFirstDigit(){
    if (display.textContent.length === 0){
        return true;
    }
    else{
        return false;
    }
}

function validarOperacao(){
    let lastDigit = display.textContent.length-1;
    if (display.textContent[lastDigit] != "+" 
        && display.textContent[lastDigit] != "-"
        && display.textContent[lastDigit] != "/"
        && display.textContent[lastDigit] != "*"
        && display.textContent[lastDigit] != ".") {
        return true;
    } 
    else {
        return false;
    }
}
function adicionarOperacao(operacao){
    if(isFirstDigit()) {
        return;
    }
    if(!validarOperacao()){
        return;
    }
    display.textContent += operacao.textContent;
}

function isOperation(string){
    if (string === "+" || string === "-" || string === "*" || string === "/"){
        return true;
    }
    else {
        return false;
    }
}
function realizarOperacao(string){
    if (!isOperation(string[string.length-1]))
        return eval(string);
    else {
        return "ERROR";
    }
}
listinha = "52.1+14+22*10"

// listinha = [521,"+","14","*","22"]
// console.log(realizarOperacao(validarExpressao(listinha)))

function equal(){
    display.textContent = realizarOperacao(display.textContent);
}
// Usei a função eval, porém ela é insegura, quando tiver tempo
// irei elaborar uma função para solucionar este problema
// Estes códigos só serão usados após isso.

// function validarExpressao(expressao){
    //     acumulador = "";
    //     resultado = [];
//     const aux = expressao.split("");

//     for (i = 0; i < aux.length; i++){
//         if(isOperation(aux[i])){
//             resultado.push(acumulador);
//             resultado.push(aux[i]);
//             acumulador = "";
//         }
//         else {
//             acumulador += aux[i];
//         }
//         if (i === aux.length-1 && acumulador != ""){
//             resultado.push(acumulador);
//         }
//     }
//     return resultado;


// }

// function plus(a,b){
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
