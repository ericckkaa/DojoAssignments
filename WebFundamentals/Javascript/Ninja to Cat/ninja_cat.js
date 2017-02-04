$(document).ready(function(){

$("img").click(function(){
    var oldCat = $(this).attr("src");
    $(this).attr("src",$(this).attr("alt-src"));
    $(this).attr("alt-src", oldCat);
})
})
