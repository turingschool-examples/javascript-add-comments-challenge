var $newCommentButton = $("#new_comment_button");

const commentForm = `
  <form id="comment_form" name="comment_form">
  <textarea name="comment_field" placeholder="type a comment"></textarea><br/>
  <input name="comment_author" placeholder="add your name" /><br/>
  <input type="submit" value="Submit Comment" />
</form>
`

const showForm = function() {
  $("#comments").append(commentForm)
  $newCommentButton.hide()
  event.preventDefault();
}

const submitComment = function(event) {
  let comment = $("[name=comment_field]").val();
  let author = $("[name=comment_author]").val();

  $("#comment_list").append("<li>" + comment + "<span class='author'>" + author + "</span></li>")
  $("#comment_form").remove()
  $newCommentButton.show();
  event.preventDefault();
}

$(document).ready(function(){
  $("#new_comment_button").on("click", showForm)
  $('#comments').on('submit', '#comment_form', submitComment)
})
