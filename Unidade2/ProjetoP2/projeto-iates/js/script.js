$(document).ready(function () {

    // ---------------- ENVIO DE MENSAGEM (contato.html) ----------------
    $("#btcontato").on("click", function (event) {
        event.preventDefault();

        const nome = $("#nome").val();
        const email = $("#email").val();
        const mensagem = $("#msg").val();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const objMensagem = { nome, email, mensagem };

        inserirMensagem(objMensagem);

        alert("Mensagem enviada com sucesso!");

        $("#nome").val("");
        $("#email").val("");
        $("#msg").val("");
    });

    // ---------------- LOGIN (admin.html) ----------------
    $("#btnEntrar").on("click", function (event) {
        event.preventDefault();

        const email = $("#emailLogin").val();
        const senha = $("#senhaLogin").val();

        const objLoginSenha = { email, senha };

        const valido = validarUsuario(objLoginSenha);

        if (valido === true) {
            window.location.href = "mensagens.html";
        } else {
            $("#erro").text("E-mail e senha inválidos").show();
        }
    });

    // ---------------- INICIAR PÁGINA DE MENSAGENS ----------------
    if ($("#tabela-mensagens").length > 0) {
        atualizarMensagens();
    }

});


// ---------------- LOCAL STORAGE ---------------------

function carregarLocal() {
    return JSON.parse(localStorage.getItem("mensagens")) || [];
}

function salvarLocal(lista) {
    localStorage.setItem("mensagens", JSON.stringify(lista));
}


// ---------------- MONTAR TABELA ---------------------

function montarTabela() {
    const corpo = $("#tabela-mensagens");
    corpo.empty();

    const mensagens = carregarLocal();

    mensagens.forEach((msg, index) => {

        const tr = $("<tr>");

        if (!msg.visualizada) tr.addClass("nao-visualizada");

        tr.append(`<td>${msg.nome}</td>`);
        tr.append(`<td>${msg.email}</td>`);
        tr.append(`<td>${msg.mensagem}</td>`);

        const tdAcoes = $("<td>");

        const btnVisualizar = $("<button>Mensagem Visualizada</button>");
        btnVisualizar.on("click", () => marcarComoVisualizada(index));

        const btnExcluir = $("<button>Excluir</button>");
        btnExcluir.on("click", () => excluirMensagem(index));

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


// ---------------- ATUALIZAR (API + LOCAL) ---------------------

function atualizarMensagens() {

    if (typeof obterMensagens !== "function") {
        montarTabela();
        return;
    }

    const mensagensAPI = obterMensagens();  

    if (mensagensAPI && mensagensAPI.length > 0) {
        let mensagensLocal = carregarLocal();

        mensagensAPI.forEach(msgAPI => {
            const existe = mensagensLocal.find(m => m.id === msgAPI.id);

            if (!existe) {
                mensagensLocal.push({
                    id: msgAPI.id,
                    nome: msgAPI.nome,
                    email: msgAPI.email,
                    mensagem: msgAPI.mensagem || msgAPI.texto,
                    visualizada: false
                });
            }
        });
        salvarLocal(mensagensLocal);
    }

    montarTabela();
}
