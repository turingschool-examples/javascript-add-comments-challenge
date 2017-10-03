$(document).ready(function(){
  var commentForm = $(".comment-form");
  console.log(commentForm)

  commentForm.hide();

  $("#new_comment_button").on("click", function(e){
    commentForm.show()
  })

  $("#new-comment").on("submit", function(e){
    commentBody = $("#comment-body").val()
    author = $("#author-name").val()
    $('#comment_list').append('<li>' + commentBody + "<span class='author'>" + author + "</span></li>");
    commentForm.hide();
    e.preventDefault();
    $("#comment-body").val('');
    $("#author-name").val(''); 

  })
})
