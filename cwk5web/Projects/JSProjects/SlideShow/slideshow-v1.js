$(document).ready(
 function(){    
    
    var images = ["https://www.bt21.com/content/201712/20171215_NY_illust.jpg","https://pbs.twimg.com/media/DiPPgvwUEAA-Zrj.jpg","https://www.bt21.com/content/201712/boon_cover.gif"];
    
    var back = $("#back");
    
    var forward = $("#forward");
    
    var image = $("#image");
    
    var imageNumber = 0;
    
    var max = images.length -1 ;
    
    var min = 0;
    
    function changeImageFoward(){
        if (imageNumber === max){
            imageNumber = min;
        }else{
            imageNumber++;
        }
        
        var newImage = images[imageNumber];
        
        image.attr("src",newImage);
        
        console.log("change image forward");
    }
    
    function changeImageBack(){
        
        if(imageNumber === min){
            imageNumber = max;
        }else{
            imageNumber--;
        }
        
        var newImage = images[imageNumber];
        
        image.attr("src", newImage);
        
        console.log("changed image back");
    }
    
    back.click(function(){changeImageBack()});
    
    forward.click(function(){changeImageFoward()});
    
    $("#One").click(function(){
        image.attr("src", images[0])
        
    });
    
    $("#Two").click(function(){
        image.attr("src", images[1])
    });
    
    $("#Three").click(function(){
        image.attr("src", images[2])
    });
    
})