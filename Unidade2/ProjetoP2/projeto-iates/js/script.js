$(document).ready(function () {

    // --- ENVIO DE MENSAGEM (contato.html) ---
    $("#btcontato").on("click", function (event) {
        event.preventDefault();

        var nome = $("#nome").val();
        var email = $("#email").val();
        var mensagem = $("#msg").val();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        var objMensagem = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        inserirMensagem(objMensagem);

        alert("Mensagem enviada com sucesso!");

        $("#nome").val("");
        $("#email").val("");
        $("#msg").val("");
    });         



});
    
  // ---------------- LOCAL STORAGE ---------------------

function carregarLocal() {
    return JSON.parse(localStorage.getItem("mensagens")) || [];
}

function salvarLocal(lista) {
    localStorage.setItem("mensagens", JSON.stringify(lista));
}

// ---------------- TABELA ---------------------

function montarTabela() {
    const corpo = $("#tabela-mensagens");
    corpo.empty();

    const mensagens = carregarLocal();

    mensagens.forEach((msg, index) => {

        const tr = $("<tr>");

        // mensagem não visualizada → negrito
        if (!msg.visualizada) {
            tr.addClass("nao-visualizada");
        }

        tr.append(`<td>${msg.nome}</td>`);
        tr.append(`<td>${msg.email}</td>`);

        // AQUI ERA O ERRO → msg.texto (corrigido para msg.mensagem)
        tr.append(`<td>${msg.mensagem}</td>`);

        // Botões
        const tdAcoes = $("<td>");

        const btnVisualizar = $("<button>Mensagem Visualizada</button>");
        btnVisualizar.click(() => marcarComoVisualizada(index));

        const btnExcluir = $("<button>Excluir</button>");
        btnExcluir.click(() => excluirMensagem(index));

        tdAcoes.append(btnVisualizar, btnExcluir);

        tr.append(tdAcoes);

        corpo.append(tr);
    });
}

// ---------------- MARCAR COMO VISUALIZADA ---------------------

function marcarComoVisualizada(index) {
    let mensagens = carregarLocal();

    if (!confirm("Marcar esta mensagem como visualizada?")) return;

    mensagens[index].visualizada = true;

    salvarLocal(mensagens);
    montarTabela();
}

// ---------------- EXCLUIR MENSAGEM ---------------------

function excluirMensagem(index) {
    let mensagens = carregarLocal();

    if (!confirm("Deseja realmente excluir esta mensagem?")) return;

    mensagens.splice(index, 1);

    salvarLocal(mensagens);
    montarTabela();
}

// ---------------- CARREGAR E ATUALIZAR MENSAGENS ---------------------

function atualizarMensagens() {
    const mensagensAPI = obterMensagens();  // vem da API

    if (mensagensAPI && mensagensAPI.length > 0) {
        let mensagensLocal = carregarLocal();

        mensagensAPI.forEach(msgAPI => {

            // Verifica se já existe pelo ID
            const existe = mensagensLocal.find(m => m.id === msgAPI.id);

            if (!existe) {
                mensagensLocal.push({
                    id: msgAPI.id,
                    nome: msgAPI.nome,
                    email: msgAPI.email,

                    // API retorna "mensagem" ou "texto" dependendo da configuração
                    mensagem: msgAPI.mensagem || msgAPI.texto,

                    visualizada: false
                });
            }
        });

        salvarLocal(mensagensLocal);
    }

    montarTabela();
}

// ---------------- INICIAR PÁGINA ---------------------

$(document).ready(() => {
    atualizarMensagens();
});
