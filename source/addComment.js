$(document).ready(function(){
    $("#comment_form").hide();
    $("").hide();

  $("button").on("click", function() {
    $("#comment_form").show();
  });

    $("#comment_form").on('submit', function(e) {
      e.preventDefault();
      console.log('it works!');
      let $data = $("#comment_form :input");
      console.log($data);
      $("#comment_list").append(`${$data}`);
      debugger;
    });
});
