$(document).ready(function(){
  $("#comments").on("click", "#new_comment_button", showCommentForm)

  $("#comments").on("click", "[type=submit]", submitNewComment)
})

function showCommentForm() {
  removeNewCommentButton()
  createCommentForm()
  unhideCommentForm()
}

function removeNewCommentButton() {
  $("#new_comment_button").remove()
}

function createCommentForm() {
  $("#comments").append(
    "<form id=new_comment>" +
    "<textarea placeholder='Your comment here...'></textarea>" +
    "<input type='text' placeholder='author' id='authorName'>" +
    "<input type='submit' value='Submit Comment'>" +
    "</form>"
  )
}

function unhideCommentForm() {
  $("#new_comment").show()
}

function submitNewComment() {
  renderNewComment()
  removeCommentForm()
  createNewButton()
}

function renderNewComment() {
  $("#comment_list").append(
    "<li>" +
      $("#new_comment textarea").val() +
      "<span class='author'>" +
        $("#new_comment #authorName").val() +
      "</span>" +
    "</li>"
  )
};

function removeCommentForm() {
  $("#new_comment").remove()
}

function createNewButton() {
  $("#comments").append("<button id='new_comment_button'>New Comment</button>")
}
