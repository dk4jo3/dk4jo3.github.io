// page transition script 

$(document).ready(
    
    function() {
    $("body").css("display", "none");
 
    $("body").fadeIn(1200);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".cover").fadeOut(1200, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
 
//add transition class to all links. 

$("a[target!='_blank']").addClass( "transition" );
