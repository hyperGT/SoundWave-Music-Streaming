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
                "margin-left": "10em",
            });   
            
            hidden = true;
        }else{
            $("main").css("width", "70%");

            $(".container").css({
                "width": "100%", 
                "margin-left": "1em",
            }); 

            hidden = false;
        }
    
    });

var darkTheme = true;
    $("#mudar-tema").click(function() {
        if(darkTheme==false){

            $("#tema").attr("src", "imgs/white-mode.png");

            $("body").css({
                "background-color": "#0e0e0e",
                "color": "white"
            });

            $("aside").css({
                "background-color": "#333"
            });
            
            darkTheme = true;
        }else{

            $("#tema").attr("src", "imgs/dark-mode.png");

            $("body").css({
                "background-color": "#fff",
                "color": "black"
            });

            $("aside").css({
                "background-color": "#333"
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