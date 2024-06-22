$(function() {
    
    /*$("#barraDePesquisa").focus(function() {
        $("#barraDePesquisa").css({
            "border-width": "5px", 
            "border-style": "solid", 
            "border-color": "white"
        });
    });*/  

var hidden = false
    $("#esconder-aside").click(function() {
        $("aside").toggle();  
        
        if(hidden==false){
            $("main").css("width", "100%");

            $(".container").css({
                "width": "80%",
                "margin-left": "10em"                
            });   
            
            hidden = true;
        }else{
            $("main").css("width", "80%");

            $(".container").css({
                "width": "100%", 
                "margin-left": "1em",
            }); 

            hidden = false;
        }
    
    });

var darkTheme = true;
    $("#mudar-tema").click(function() {
        if(darkTheme==false){ // se o modo escuro não estiver ativado

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
        }else{

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