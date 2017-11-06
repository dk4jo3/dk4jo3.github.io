// page transition script 

$(document).ready(
    
    function() {
    $(".cover").css("display", "none").return;
    
    function()  
    $(".cover").fadeIn(500);
 
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
                             
                             
