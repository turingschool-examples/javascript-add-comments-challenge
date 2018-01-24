$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    hideShowButtonForm();
  });

  $('form#new_comment input[type="submit"]').on('click', function(event) {
    event.preventDefault();
    var commentBody = $('form#new_comment textarea').val();
    var commentAuthor = $('form#new_comment input[type="text"]').val();
    createNewComment(commentBody,commentAuthor);
  });
});

function createNewComment(commentBody,commentAuthor) {
  if (commentBody != "") {
    $('<li>' + commentBody + '<span class="author">' + commentAuthor + '</span></li>').appendTo('ul#comment_list');

    $('form#new_comment textarea').val("Your comment here...");
    $('form#new_comment input[type="text"]').val("");

    hideShowButtonForm();
  }
};

function hideShowButtonForm() {
  if ($('form#new_comment').css('display') == 'none') {
    $('form#new_comment').show();
    $('#new_comment_button').hide();
  }
  else {
    $('form#new_comment').hide();
    $('#new_comment_button').show();
  }
}
