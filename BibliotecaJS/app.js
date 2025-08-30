// Funções para manipular a biblioteca
let biblioteca = [];

function gerarRelatorio() {
    if (biblioteca.length === 0) {
        document.getElementById("mensagem").innerHTML = "Nenhum livro para gerar relatório.";
        return;
    }

    let relatorio = "===== RELATÓRIO COMPLETO DA BIBLIOTECA =====<br>";
    let total = 0;
    biblioteca.forEach((livro, index) => {
        relatorio += `<br>Livro ${index + 1}:<br>`;
        relatorio += `Título: ${livro.titulo}<br>`;
        relatorio += `Autor: ${livro.autor}<br>`;
        relatorio += `Ano: ${livro.ano}<br>`;
        relatorio += `Quantidade: ${livro.quantidade}<br>`;
        total += livro.quantidade;
    });
    relatorio += `<br>TOTAL DE LIVROS: ${total}<br>`;
    document.getElementById("mensagem").innerHTML = relatorio;
}

function cadastrarLivros() {
    // Abre o modal de cadastro
    document.getElementById("modalCadastrar").style.display = "flex";
}

function salvarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;
    const quantidade = document.getElementById("quantidade").value;

    if (titulo && autor && ano && quantidade) {
        biblioteca.push({
            titulo,
            autor,
            ano,
            quantidade: Number(quantidade)
        });

        document.getElementById("mensagem").innerHTML = `Livro "${titulo}" cadastrado com sucesso!`;
        fecharModal();
    } else {
        document.getElementById("mensagem").innerHTML = "Por favor, preencha todos os campos.";
    }
}

function listarLivros() {
    if (biblioteca.length === 0) {
        document.getElementById("mensagem").innerHTML = "Nenhum livro cadastrado!";
        return;
    }

    let lista = "Listar livros:<br>";
    biblioteca.forEach((livro, index) => {
        lista += `<br>Livro ${index + 1}:<br>`;
        lista += `Título: ${livro.titulo}<br>`;
        lista += `Autor: ${livro.autor}<br>`;
        lista += `Ano: ${livro.ano}<br>`;
        lista += `Quantidade: ${livro.quantidade}<br>`;
    });

    document.getElementById("mensagem").innerHTML = lista;
}

function calcularTotal() {
    let total = biblioteca.reduce((soma, livro) => soma + livro.quantidade, 0);
    document.getElementById("mensagem").innerHTML = `Total de livros na biblioteca: ${total}`;
}

function excluirLivro() {
    if (biblioteca.length === 0) {
        document.getElementById("mensagem").innerHTML = "Não há livros para excluir.";
        return;
    }

    let lista = "Livros disponíveis para exclusão:<br>";
    biblioteca.forEach((livro, index) => {
        lista += `<br>${index + 1} - ${livro.titulo} (${livro.autor})<br>`;
    });

    let indice = prompt("Digite o número do livro que deseja excluir: ");
    indice = Number(indice) - 1;

    if (indice >= 0 && indice < biblioteca.length) {
        let removido = biblioteca.splice(indice, 1)[0];
        document.getElementById("mensagem").innerHTML = `Livro "${removido.titulo}" removido com sucesso!`;
    } else {
        document.getElementById("mensagem").innerHTML = "Número inválido. Nenhum livro foi removido.";
    }
}

// Abrir/Fechar Modal
function fecharModal() {
    document.getElementById("modalCadastrar").style.display = "none";
}

// Eventos dos botões
document.getElementById("gerarRelatorioBtn").addEventListener("click", gerarRelatorio);
document.getElementById("cadastrarLivroBtn").addEventListener("click", cadastrarLivros);
document.getElementById("salvarLivroBtn").addEventListener("click", salvarLivro);
document.getElementById("fecharModalBtn").addEventListener("click", fecharModal);
document.getElementById("listarLivrosBtn").addEventListener("click", listarLivros);
document.getElementById("calcularTotalBtn").addEventListener("click", calcularTotal);
document.getElementById("excluirLivroBtn").addEventListener("click", excluirLivro);
