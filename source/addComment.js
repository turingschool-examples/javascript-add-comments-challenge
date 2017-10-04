$(document).ready(function(){
    $("#comment_form").hide();
    $("").hide();

  $("button").on("click", function() {
    $("#comment_form").show();
  });

    $("#comment_form").on('submit', function(e) {
      e.preventDefault();
      let $data = $("#comment_form :input");
      $("#comment_list").append(`<li>${$data}</li>`);
      $("#comment_list").append(`<li><em>${$data}</em></li>`);
    });
});
