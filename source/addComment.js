$(document).ready(function(){

  $('#new_comment_button').on('click', function() {
    event.preventDefault();

    $(this).hide()

    $('body').append('<form id="new_comment" name="new_comment" style="display: block"></form>');
    $('#new_comment').append('<textarea form="new_comment" id="comment-text" placeholder="Your comment here!"/>');
    $('#new_comment').append('<input type="text" id="authorName" placeholder="Your name here!"/>');
    $("#new_comment").append('<input type="submit" id="createComment" value="Leave Comment!"/>');

      $('#createComment').on('click', function () {
        event.preventDefault();
        var comment = $('#comment-text').val();
        var author = $('#authorName').val();

        $('#new_comment').remove()
        if (comment) {
          $('#comment_list').append('<li>' + comment + '<span class="author">' + author + '</span>' + '</li>');
        }
        $('#new_comment_button').show();
      });
  });
});
