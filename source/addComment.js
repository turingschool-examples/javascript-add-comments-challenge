$(document).ready(function(){
  var commentForm = $(".comment-form");

  $("#new_comment_button").on("click", function(event){
    event.preventDefault();
    commentBody = $("#comment-body").val()
    author = $("#author-name").val()
    $('#comment_list').append('<li>' + commentBody + "<span class='author'>" + author + "</span></li>");
    $("#comment-body").val('');
    $("#author-name").val('');
    commentForm.hide();
  })
})
