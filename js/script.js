$(function() {
    
    /*$("#barraDePesquisa").focus(function() {
        $("#barraDePesquisa").css({
            "border-width": "5px", 
            "border-style": "solid", 
            "border-color": "white"
        });
    });*/  

    $("#esconder-aside").click(function() {        
        $("aside").toggle();  
    });

var darkTheme = false;
    $("#mudar-tema").click(function() {
        if(darkTheme==false){

            $("#tema").attr("src", "imgs/white-mode.png");

            $("body").css({
                "background-color": "black",
                "color": "white"
            });

            $("aside").css({
                "background-color": "gray"
            });
            
            darkTheme = true;
        }else{

            $("#tema").attr("src", "imgs/dark-mode.png");

            $("body").css({
                "background-color": "#fff",
                "color": "black"
            });

            $("aside").css({
                "background-color": "bisque"
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