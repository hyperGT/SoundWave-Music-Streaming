$(function(){

    var hidden = false
    $("#esconder-aside").click(function () {
        $("aside").toggle();

        if (hidden == false) {

            $(".separar").css("width", "100%");

            hidden = true;

        } else {
            $(".separar").css("width", "80%");

            hidden = false;

        }

    });

    var darkTheme = true;
    $("#mudar-tema").click(function () {
        if (darkTheme == false) { // verificando se o escuro está ativado

            // trocando o src das imagens dos botões da nav bar 
            $("#tema").attr("src", "imgs/icons/sun.png");

            $("#esconder").attr("src", "imgs/icons/burger dark.png");

            $("#lupa").attr("src", "imgs/icons/search dark.png");

            // mudando as cores para o tema escuro

            $("a").css("color", "white");

            $(".perfil-name").css("color", "white");

            $("header").css({
                "background-color": "#333"
            });

            $("body").css({
                "background-color": "#0e0e0e",
                "color": "white"
            });

            $("aside").css({
                "background-color": "#222121"
            });

            $("footer").css({
                "background-color": "#333"
            });

            darkTheme = true;

        } else { // tema escuro está ativo
            
            // trocando o src das imagens dos botões da nav bar 
            $("#tema").attr("src", "imgs/icons/moon.png");

            $("#esconder").attr("src", "imgs/icons/burger light.png");

            $("#lupa").attr("src", "imgs/icons/search light.png");

            // mudando as cores para o tema claro

            $("a").css("color", "#1c1d1c");

            $("header").css({
                "background-color": "#3CB371"
            });

            $(".perfil-name").css("color", "black");

            $("body").css({
                "background-color": "#fff",
                "color": "#1c1d1c"
            });

            $("aside").css({
                "background-color": "#3CB371"
            });

            $("footer").css({
                "background-color": "#3CB371"
            });

            darkTheme = false;
        }
    });
});

function barraSel() {
    $("#barraDePesquisa").css({
        "border-width": "5px",
        "border-style": "solid",
        "border-color": "white"
    });
}

function barraNotSel() {
    $("#barraDePesquisa").css("border", "hidden");
}

// playlist 
document.addEventListener('DOMContentLoaded', function () {

    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playlist = document.querySelector(".lista-de-musicas");
    const musicLinks = document.querySelectorAll(".lista-de-musicas a");

    // escondendo a lista de musicas e o controlador de audio
    playlist.style.display = "none";
    audioPlayer.style.display = "none";

    // mostrando tudo ao clicar em um album (atualmente só o Thriller disponivel para teste)
    albumLinkTeste.addEventListener("click", function () {
        playlist.style.display = "block";
        audioPlayer.style.display = "block";
        $(".sideBarMusica h1#nomeAlbum").text("Album: Thriller");
    });

    musicLinks.forEach(link => {
        // quando clicar na âncora inicia a função
        link.addEventListener("click", function (event) {
            event.preventDefault();
            // guardando na variavel musicSrc o caminho em que a musica está armazenada 
            const musicSrc = this.getAttribute("data-src");
            // mudando o atributo src do componente audioSource para o caminho da musica
            audioSource.src = musicSrc;
            // tocando a musica chamando as funções "carregar" e "play" para tocar a música
            audioPlayer.load();
            audioPlayer.play();
        });
    });
});

// Carrossel
let slideAtual = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll(".video");
    const carrossel = document.querySelector(".carrossel");

    if (index >= slides.length) {
        slideAtual=0;
    } else if (index < 0) {
        slideAtual = slides.length - 1;
    } else {
        slideAtual = index;
    }

    const offset = -slideAtual * 100; // Calcula o deslocamento para o slide atual
    carrossel.style.transform = `translateX(${offset}%)`;
}

function proxSlide() {
    mostrarSlide(slideAtual + 1);
}

function prevSlide() {
    mostrarSlide(slideAtual - 1);
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarSlide(slideAtual);
});

document.querySelector(".next").addEventListener("click", proxSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);