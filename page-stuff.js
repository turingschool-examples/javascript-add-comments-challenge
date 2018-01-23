$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    $('form#new_comment').show();
    $('#new_comment_button').hide();
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

    $('form#new_comment').hide();
    $('#new_comment_button').show();
  }
};

// function hideShowButtonForm() {
//   if (form#new_comment)
// }
