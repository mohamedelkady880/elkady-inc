$(document).ready(function()
{   
    $(window).on("load", function()
 {      
    $(".loading-overlay .spinner").fadeOut(2000, function()
    {
        $(this).parent().fadeOut(2000, function()
        {
            $("body").css("overflow","auto");
            $(this).remove();
        });
    });        
 });
});