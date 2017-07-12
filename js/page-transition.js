// page transition script 

$(document).ready(
    
    function() {
    $(".cover").css("display", "none").return;
 
    $(".cover").fadeIn(4000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".cover").fadeOut(4000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
 
//add transition class to all links. 

$("a[target!='_blank']").not(document.getElementByClass("go-to-top").addClass( "transition" );
