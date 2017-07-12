// page transition script 

$(document).ready(
    
    function() {
    $(".cover").css("display", "none");
 
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

$("a[target!='_blank']").addClass( "transition" );
