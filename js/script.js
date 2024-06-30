$(function() {    


var hidden = false
    $("#esconder-aside").click(function() {
        $("aside").toggle();  
        
        if(hidden==false){

            $(".separar").css("width", "100%");
            /*$("main").css("width", "100%");*/
/*
            $(".container").css({
                "width": "80%",
                "margin-left": "10em"                
            });   
  */          
            hidden = true;
        }else{
            $(".separar").css("width", "80%");
            /*$("main").css("width", "80%");*/

            $(".container").css({
                "width": "100%", 
                "margin-left": "1em",
            }); 

            hidden = false;
        }
    
    });

var darkTheme = true;
    $("#mudar-tema").click(function() {
        if(darkTheme==false){ // verificando se o escuro está ativado

            // trocando o atributo src das imagens dos botões da nav bar
            $("#tema").attr("src", "imgs/buttons/sun.png");            

            $("#esconder").attr("src", "imgs/buttons/burger dark.png");

            $("#lupa").attr("src", "imgs/buttons/search dark.png");

            // mudando as cores para o tema escuro
            $("figcaption").css("color", "white");
            
            $("header").css({
                "background-color": "#333"
            });

            $("body").css({
                "background-color": "#0e0e0e",
                "color": "white"
            });

            $("aside").css({
                "background-color": "#333"
            });

            $("footer").css({
                "background-color": "#333"
            });
                        
            darkTheme = true;

        }else{ // darktheme está ativo

            // trocando o atributo src da imagem do botão trocar tema
            $("#tema").attr("src", "imgs/buttons/moon.png");

            $("#esconder").attr("src", "imgs/buttons/burger light.png");

            $("#lupa").attr("src", "imgs/buttons/search light.png");

            // mudando as cores para o tema claro
            $("figcaption").css("color", "#1c1d1c");

            $("header").css({
                "background-color": "#3CB371"
            });

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

function barraSel(){
    $("#barraDePesquisa").css({
        "border-width": "5px",
        "border-style": "solid",
        "border-color": "white"
    });
}

function barraNotSel(){
    $("#barraDePesquisa").css("border", "hidden");
}

/**
 * Eventos
 * Ativar lista ordenada de musicas do album + audio controler quando clicar 
 * em alguma musica
 */

document.addEventListener('DOMContentLoaded', function(){
    
    const audioPlayer = document.getElementById("audioPlayer"); 
    const audioSource = document.getElementById("audioSource");
    const playlist = document.querySelector(".lista-de-musicas");
    const musicLinks = document.querySelectorAll(".lista-de-musicas a"); 

    // escondendo a lista de musicas e o controlador de audio
    playlist.style.display = "none";
    audioPlayer.style.display="none";

    // mostrando tudo ao clicar em um album (atualmente só o Thriller disponivel para teste)
    albumLinkTeste.addEventListener("click", function(){
        playlist.style.display = "block"; 
        audioPlayer.style.display = "block";
                
    });

    musicLinks.forEach(link => {
        // quando clicar na âncora inicia a função
        link.addEventListener("click", function(event){
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