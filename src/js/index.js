const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev =>{ 

    pokedev.addEventListener("click",() =>{

        esconderCartaoPokedev();

const idPokedevSelecionado = pokedev.attributes.id.value;

        mosTrarcarTaoPokedev(idPokedevSelecionado);

        desativarPokedevNaListagem();

        ativarPokedevNaListagem(idPokedevSelecionado);


})
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);

    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");

    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mosTrarcarTaoPokedev(idPokedevSelecionado) {
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);

    cartaoPokedevParaAbrir.classList.add("aberto");
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
