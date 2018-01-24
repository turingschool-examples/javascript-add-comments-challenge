$(document).ready(function(){
  $('#new_comment_button').click(function () {
    event.preventDefault();
    showCommentForm();
  })

  $('textarea[name=comment_body]').on('keyup', function() {
    checkSubmitButton();
  })

  $('input[type=submit]').click(function () {
    event.preventDefault();
    createComment();
  })
})

function createComment() {
  hideCommentForm();
  appendComment();
  clearForm();
  checkSubmitButton();
}

function checkSubmitButton() {
  if ($('textarea[name=comment_body]').val()) {
    $('input[type=submit]').prop("disabled", false);
  } else {
    $('input[type=submit]').prop("disabled", true);
  }
}

function appendComment() {
  var comment = $('textarea[name=comment_body]').val();
  var author = $('input[name=author_name]').val();

  $('#comment_list').append(`<li>${comment}\n<span class="author">${author}</span></li>`);
}

function clearForm() {
  $('textarea[name=comment_body]').val('');
  $('input[name=author_name]').val('');
}

function showCommentForm() {
  $('#new_comment').show();
  $('#new_comment_button').hide();
}

function hideCommentForm() {
  $('#new_comment').hide();
  $('#new_comment_button').show();
}
