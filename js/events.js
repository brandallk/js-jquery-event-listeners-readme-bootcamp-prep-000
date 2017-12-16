function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty")
  });
}
  

$(document).ready(function(){

  getIt();
  frameIt();

});
