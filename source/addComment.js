$(document).ready(function(){
  $('#new_comment_button').on('click', toggleForm);
  $('#new_comment').submit(submitComment)
});

var toggleForm = function() {
  $('form').toggle();
};

var submitComment = function() {
  event.preventDefault();
  var $li = $('<li />');
  var $span = $('<span />').addClass('author');
  var $comment = $(this).find('textarea[name=comment]');
  var $author = $(this).find('input[name=authorName]');

  $li.text($comment.val());
  $span.text($author.val());

  $li.append($span);

  var $list = $('#comment_list');
    $list.append($li);
};
