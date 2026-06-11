/* CONFIGURAR AQUI */
const senhaCorreta = "30052026";
const nomeAmor = "Ana Luiza";
let contador = 0
/* LOGIN */
function entrar() {
    
    const senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
        document.getElementById("login").style.display = "none";
        document.getElementById("site").classList.remove("hidden");

        iniciar();
    } else {
        if (contador < 2) {
            document.getElementById("erro").innerText = "Senha incorreta ❤️";
            contador += 1
        } else {
            document.getElementById("erro").innerText = "❤️ Dica Extra: Data do nosso namoro (Só os numeros)❤️";
        }
    }
}

/* INICIAR */
function iniciar() {
    document.getElementById("titulo").innerText =
        "Eu te amo, " + nomeAmor + " ❤️";

    criarFundo(); // ✅ novo fundo
}


/* FUNDO */
const imagens = Array.from(
    { length: 35 },
    (_, i) => `imagens/foto${i + 1}.jpg`
);

function criarFundo() {
    const bg = document.querySelector(".bg");

    bg.innerHTML = "";

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const tamanho = 100; // mesmo do CSS

    const colunas = Math.ceil(largura / tamanho);
    const linhas = Math.ceil(altura / tamanho);

    const total = colunas * linhas;

    for (let i = 0; i < total; i++) {
        const img = document.createElement("img");

        img.src = imagens[i % imagens.length];

        bg.appendChild(img);
    }
}

function mudarFundo() {
    const bg = document.querySelector(".bg");
    const img = imagens[Math.floor(Math.random() * imagens.length)];
    bg.style.backgroundImage = `url(${img})`;
}

/* CARTA */
function abrir() {
    document.getElementById("mensagem").innerHTML =
        "<p>Desde que você entrou na minha vida, tudo ficou mais bonito. ❤️<br>Eu te amo muito ❤️<br>Você é a melhor parte da minha vida ❤️</p>";
}

/* MÚSICA */
const musica = document.getElementById("musica");
document.getElementById("btnMusica").onclick = () => {
    musica.paused ? musica.play() : musica.pause();
};