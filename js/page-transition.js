// page transition script 

$(document).ready(
    
    function()  
    $(".cover").fadeIn(600);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".cover").fadeOut(600, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
 
//add transition class to all links. 

$("a[target!='_blank']").not(document.getElementByClassName("go-to-top")).addClass( "transition" );
                             
                             
