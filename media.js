const nm = document.getElementById("nome");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");

const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");

function mostrar() {
    let n1 = parseFloat(nota1.value)
    let n2 = parseFloat(nota2.value)
    let n3 = parseFloat(nota3.value)
    let n4 = parseFloat(nota4.value)
    const notaFinal = (n1 + n2 + n3 + n4) / 4
    const notaFixada = notaFinal.toFixed(2)
         if (notaFixada >= 6)
           out1.innerHTML = "Olá " + nm.value + ", sua média é: " + notaFinal + " Você esta aprovado"
        else if (notaFixada < 6)
           out1.innerHTML = "Olá " + nm.value + ", sua média é: " + notaFinal + " Você esta reprovado"
}

    btn1.addEventListener('click',mostrar);
  