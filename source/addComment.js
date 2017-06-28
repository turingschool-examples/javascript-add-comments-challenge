$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    event.preventDefault();
    $('#new_comment_button').hide();
    $('#new_comment').show();
      $('#comments').append('<div id="new_comment"><textarea name="newComment" placeholder="enter your comment"/><br><input type="text" name="authorName" placeholder="your name"/><input type="submit" value="create comment"</div>');
        $('#comments input[type="submit"]').click(function() {
          event.preventDefault();
          var newComment = $(this).parent().find('textarea').val();
          var authorName = $(this).parent().find('input[name="authorName"]').val();
          if (newComment) {
            $('#comment_list').append('<li>' + newComment + '<span class="author">' + authorName + '</span></li>');
            $('#new_comment').remove();
            $('#new_comment_button').show();
          }
        });
      });
    });
