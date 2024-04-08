const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetoInativo = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {

    mostrarMaisProjetos();

    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetoInativo.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}