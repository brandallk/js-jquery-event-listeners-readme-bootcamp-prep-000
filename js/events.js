function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $("form ")
}

$(document).ready(function(){

  getIt();
  frameIt();

});
