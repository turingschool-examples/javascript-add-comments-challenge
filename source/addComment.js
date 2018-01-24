$(document).ready(function(){
  $("#new_comment_button").on("click", function() {
    $("#new_comment").toggle()
  })

    $("#new_comment").submit(function(event) {
      var comment = $("textarea[name='comment']").val();
      var author = $("input[name='authorName']").val();
      event.preventDefault()
      $("comment_list").append('<li>' + comment + author + '</li>');

      $("#new_comment").toggle()
      $("textarea[name='comment']").val("");
      $("input[name='authorName']").val("");
    })
  })
