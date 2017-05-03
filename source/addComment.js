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

  var $comment = $('textarea[name=comment]').val();
  var $author = $('input[name=authorName]').val();

  if ($comment == ""){
    return;
  };

  $li.text($comment);
  $span.text($author);

  $li.append($span);

  var $list = $('#comment_list');
    $list.append($li);
};
