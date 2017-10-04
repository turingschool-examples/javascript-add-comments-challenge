$(document).ready(function(){
    $("#comment_form").hide();
    $("").hide();

  $("button").on("click", function() {
    $("#comment_form").show();
  });

    $("#comment_form").on('submit', function(e) {
      e.preventDefault();
      let $comment = $('#comment').val();
      let $name = $('#user_name').val();
      $("#comment_list").append(`<li>${$comment}</li>\n<em>${$name}</em></li>`);
      //debugger;
    });
});
