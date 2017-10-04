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
      $("#comment_list").append(`<li>${$comment}` + "\n" + `<em><font size="-1">${$name}</font></em></li>`);
    });
});
