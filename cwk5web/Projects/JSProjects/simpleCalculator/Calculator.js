$(document).ready(function(){
    
    console.log("JS working");
    var state = 0;

    var first = "";
    var operatior = "";
    var second = "";
    
    var answer = "";
    
    var OString = ["*" , "/", "+", "-"]
    var OId = ["m", "d", "a", "s"]
    
    for(var i = 9; i >= 0; i--){
        $("#numbers").append("<button class='number' id=" + i.toString() + "> " + i.toString() + "</button>");
        $("#" + i.toString()).click(function(state){
            if(state == 0){
                first = first + i.toString();
            }else{
                second += i.toString();
            }
        });
    }
    
    for(var i = 0; i < OString.length; i++){
        $("#operators").append("<button class='operatior' id=" + (OId[i]).toString() + "> " + (OString[i]).toString() + "</button>");
        $("#" + (OId[i]).toString()).click(function(state){
            if(state == 1){
                operatior = (OId[i]);
                second = "";
            }else{
                state++;
                operatior +=  (OId[i]);
            }
        });
    }
    
    $("#equalSign").html("<button id='euqal ' > = </button>");
    
    $("#equal").click(function(state) {
        if(state == 0){
            $("#equalSign").text(first);        
        }else{
            state == 0;
            var one = int(first);
            var two = int(second);
            if(operatior == "m"){
                $("#results").text(one * two);        
            }else if(operatior == "d"){
                $("#results").text(one / two);        
            }else if(operatior == "a"){
                $("#results").text(one + two);        
            }else{
                $("#results").text(one - two);        
            }
        }
    });
    
    
});
