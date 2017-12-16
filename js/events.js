function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $("form input#typing").on("keydown", (event) => {
    if (event.which === 71) {
      alert()
    }
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
