$(document).ready(
    
    
    
    
    
    
    function(){
        var bodyPartIds = []
        var chead = $('#head');
        var cbody = $("#tall");
        var caterpiller = $("#caterpiller");
        var wholebody = $("all");
        
        var segment = "<div class='body2 body'></div>";
        
        var buttonOne = $("#animator");
        var buttonTwo = $("#reset");
        var buttonThree = $("#fade");
        var buttonFour = $("#grow");
        
        //$(this).keypress() 
        
        buttonThree.click(function(){
            caterpiller.fadeToggle(2000);
        })
        
        buttonOne.click(function(){
            for (var i=1; i<20;i++){
                cbody.animate({width:'100px'}, 'fast').animate({width:'50px', 'margin-left':50*i + 'px'}, 'fast');
            }
            cbody.css({"margin-left":"0px", width:"50px"});
            
            
            
        })
        
        buttonTwo.click(function() {
            cbody.css({"margin-left":"0px", width:"50px"});
            $(".body2").remove();
        })
        
        buttonFour.click(function() {
            cbody.after(segment);
            caterpiller.remove(".body2");
        })
        
    }
    
    
    
    
)
