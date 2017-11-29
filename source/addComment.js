$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    $('#new_comment_button').toggle();
    $('#new_comment').toggle();
  });

  $('#new_comment').on('submit', function(event) {
    event.preventDefault();
    var comment = $('#comment').val();
    var author = $('#author_name').val();
    $('#new_comment_button').toggle();
    $('#new_comment').toggle();
    $('#comment_list').append("<li>" + comment + '<span class="author">' + author + "</span></li>");
  });
});
