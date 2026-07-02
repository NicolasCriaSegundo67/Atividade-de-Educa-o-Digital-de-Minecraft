 // Botão de curtidas
const botaoCurtir = document.getElementById("curtir");

botaoCurtir.addEventListener("click", () => {
    let curtidas = document.querySelector("#curtir span");
    curtidas.textContent = parseInt(curtidas.textContent) + 1
});
