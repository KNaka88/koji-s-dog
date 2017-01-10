jQuery(document).ready(function() {
  $("#lights").click(function(){
    $("body").toggleClass("lights-out");
    $("h3").toggleClass("text-italics");

  });


});
