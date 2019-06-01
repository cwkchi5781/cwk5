"use strict";

$(document).ready(
    function(){
        
        var whiteMove = true;
        var whitePieces = 12;
        var blackPieces = 12;
        
        function drawBoard(){
            for(var i = 0; i < 8; i++){
                for(var j = 0; j < 8; j++){
                    if((i + j)% 2 === 0){
                        $("#squares").append($("<div>", {class: "white square"}));
                    }else{
                        var squareId = i + "_" + j;
                        $("#squares").append($("<div>", {class: "red square", id: squareId}));
                        if(i<3){
                            $("#"+squareId).append($("<div>", {class:"black piece"}));
                        }else if(i > 4){
                            $("#"+squareId).append($("<div>", {class:"white piece"}));
                        }
                    }
                }
            }
        }
        
        function updateTurn(){
            var turn = "white";
            if (blackPieces === 0){
                $("#turn").html("White wins!");
            }else if (whitePieces === 0){
                $("#turn").html("Black wins!")
            }else{
                if(whiteMove){
                    $("#turn").html("White's move")
                }else{
                    $("#turn").html("Black's move")
                }
            }
        }
        
        function setPiecesEvents(){
            $(".black.piece").click(function(){
                whitePieceClicked($(this));
            })
            $(".white.piece").click(function(){
                blackPieceClicked($(this));
            })
            $(".red.square").click(function(){
                redSquareClicked($(this));
            })
            
        }
        
        function whitePieceClicked(piece){
            console.log($(piece).attr("id"));

            whiteMove = false;
            updateTurn()
            
        }
        
        function blackPieceClicked(piece){
            console.log($(piece).attr("id"));
            whiteMove = true;
            updateTurn()
            
        }
        
        function redSquareClicked(){}
        
        drawBoard();
        setPiecesEvents()
    }
    )