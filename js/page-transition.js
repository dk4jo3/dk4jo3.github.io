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

$("a[target!='_blank']").not(document.getElementByClass("go-to-top")).addClass( "transition" );
                             
//fullpage remove id="fullpage" 

$(function() {
  $(window).resize(function () {
    if (window.innerWidth < 720) {
      $(".intro").removeClass("background");
      $("#fullpage-wrapper").removeAttr("id");
    } else {
      $(".intro").addClass("showMenu");
      $("#fullpage-wrapper").attr("id", "fullpage");
    }
  });
});


//disable scroll and background for responsive 
                             
