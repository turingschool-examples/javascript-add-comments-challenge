$(document).ready(function(){
  $('#new_comment_button').on("click", function(event) {
    event.preventDefault()
    $('#comments').append(showCommentForm());
  });

  $("#new_comment").on("submit", function(event) {
    event.preventDefault();
    publishComment();
  });
});

function showCommentForm() {
  let formBegin = '<form name="new_comment" id="new_comment">';
  let commentBody = '<textarea name="comment" placeholder="Tell us what you think..."></textarea>';
  let author = '<text name="author" placeholder="Written by..."></text>';
  let submit = '<input type="submit" value="Create Comment"/></form>';
  return formBegin + commentBody + author + submit;
};

function publishComment() {
  let comment = $('[name=comment]').val();
  let author = $('[name=author]').val();
  commentValidation(comment);
};

function commentValidation(comment) {
  if (comment === '') {
    alert("Please enter a comment");
  } else {
    $('#comment_list').append(`<li>${comment}<span class="author">${author}</span></li>`);
  };
};
