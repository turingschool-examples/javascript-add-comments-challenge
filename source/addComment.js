$(document).ready(function(){
  $('#comments #new_comment_button').on('click', function(e) {
    e.preventDefault();
    var newCommentButton = $('#comments #new_comment_button');
    newCommentButton.detach(); 
    $('#comments #comment_list').append('<li id="new_comment">\n</li>');
    $('#comment_list #new_comment').append('<form></form>');
    $('#new_comment form').append('<input type="text" placeholder="Comment" id="new_comment_body">');
    $('#new_comment form').append('<input type="text" placeholder="Author" id="new_comment_author">');
    $('#new_comment form').append('<input type="submit" value="Submit" id="new_comment_submit">');
    document.getElementById('new_comment_submit').addEventListener('click', function(e) {
      e.preventDefault();
      var body = $('#comments #new_comment_body').val();
      var author = $('#comments #new_comment_author').val();
      if (body.length > 0 && author.length > 0) {
        $('#comments #new_comment').remove();
        $('#comments #comment_list').append(`<li>\n${body}\n<span class='author'>${author}</span></li>`);
        $('#comments').append(newCommentButton);
      }
    });
  });
})
