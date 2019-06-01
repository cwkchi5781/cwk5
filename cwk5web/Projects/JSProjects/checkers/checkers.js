$(document).ready(
 function(){
     var board = $("#board");
     var turn = "Black";
     
    Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
        return false;
    }   

    function drawBoard(){

    for(var j = 0; j < 8; j++){
        if(j%2 == 0){
            //console.log("first loop");
            for(var i = 0; i < 8; i++){
                var block = $("<div class='block'></div>");
                board.append(block);
                //console.log(i%2);
                if(i%2 == 0){
                    block.addClass("whiteBlock");
                }else{
                    block.addClass("blackBlock");
                    block.attr('id', i.toString()+j.toString());
                }
            }
        }else if(j%2 == 1){
            //console.log("second loop");
            for(var i = 0; i < 8; i++){
                var block = $("<div class='block'></div>");
                board.append(block);
                //console.log(i%2);
                if(i%2 == 0){
                    block.addClass("blackBlock");
                    block.attr('id', i.toString()+j.toString());
                }else{
                    block.addClass("whiteBlock");
                }
            }
        }
    }
    }
    
    function setPieces(){
    
    $(".blackBlock").each(function(){
        var piece = $("<div class='piece' id='p"+$(this).attr('id') +"'></div>");
        var pov = ($(this).attr("id")).toString()
        if ((pov[1] == 0) || (pov[1] == 1)||(pov[1] == 2)){
            $(this).append(piece);
            //console.log('black piece' + pov)
            $("#p" + $(this).attr('id')).addClass("pieceBlack")
        }
        if ((pov[1] == 7) || (pov[1] == 6)||(pov[1] == 5)){
            $(this).append(piece);
            $("#p" + $(this).attr('id')).addClass("pieceWhite");
            //console.log('white piece ' + pov)
        }
    })
    
    }
    
    function resetBlocks(){
        $(".block").each(function() {
                //console.log("removing class function has ran")
            if($(this).hasClass("selected")){
                $(this).removeClass("selected");
                //console.log("removed class")
            }
        })
    }
    
    function resetPieces(){
        $(".piece").each(function() {
            if ($(this).hasClass("clicked")){
                $(this).removeClass("clicked");
            }
        })
    }
    
    function setPieceEvents(){
        $(".piece").each(function(){
            $(this).click(function(){
                
                
               // console.log("function running")
                var pov = ($(this).attr("id")).toString();
                var x = pov[1];
                var y = pov[2];
                
                
                
                var posibblepositions = [];
                if ($(this).hasClass("pieceWhite")){
                    if(turn == "White"){
                    posibblepositions.push("#" + (parseInt(x)+1).toString() + (parseInt(y)-1).toString());
                    posibblepositions.push("#" + (parseInt(x)-1).toString() + (parseInt(y)-1).toString());
                    }else{
                        return
                    }
                }
                else if ($(this).hasClass("pieceBlack")){
                    if (turn == "Black"){
                    posibblepositions.push("#" + (parseInt(x)+1).toString() + (parseInt(y)+1).toString());
                    posibblepositions.push("#" + (parseInt(x)-1).toString() + (parseInt(y)+1).toString());
                    }else{
                        return
                    }
                }
                
                resetPieces()
                
                $(this).addClass("clicked");
                //console.log(posibblepositions);
                
                resetBlocks()
                
                for(var i = 0; i < posibblepositions.length ; i++){
                    if ($(posibblepositions[i]).length){
                    $(posibblepositions[i]).toggleClass("selected");
                    //console.log("loop working");
                    //console.log(i);
                    }
                }
            })
        })
        
    }
    
    function checkLocation(location, side){
        var location = $(location).attr("id");
        $("." + side.toString()).each(function() {
            
        })
    }
    
    function initBoard(){
        drawBoard()
        $("#text").text("white's move")
        setPieces()
        setPieceEvents()
    }
    
    function movePiece(){
        console.log("move Piece function ran")
        $(".block").each(function() {
            console.log("selected loop ran")
            $(this).click(function() {
                console.log("onclick function ran")
                if( $(this).hasClass("selected")){
                    var piece;
                    if ($(".clicked").hasClass("pieceWhite")){
                        piece = $("<div class='piece pieceWhite' id='p"+$(this).attr('id') +"'></div>");
                    }else{
                         piece = $("<div class='piece pieceBlack' id='p"+$(this).attr('id') +"'></div>");
                    }
                    console.log(piece);
                    resetBlocks();
                    $(".clicked").remove();
                    $(this).html(piece);
                    console.log($(this).html()) 
                    setPieceEvents()
                }
            });
        });
    }
    
    
    $("#button").click(function(){
    board.css({"display":"grid"})
    initBoard();
    
    movePiece();
    });    
    
});
