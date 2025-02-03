let contagem = localStorage.getItem("contagem") ?
parseInt(localStorage.getItem("contagem")) : 0;
document.getElementById("contagem").textContent = contagem;

function contar() {
    contagem++;
    atualizarContagem();
}

function resetar() {
    contagem = 0
    atualizarContagem();
}

function atualizarContagem() {
    const elemento = document.getElementById("contagem")
    elemento.textContent = contagem;
    elemento.style.transform = "scale(1.2)";
    setTimeout(() => {
        elemento.style.transform ="scale(1)";
    }, 150);
    
    localStorage.setItem("contagem", contagem);
}