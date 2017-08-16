$(document).ready(function(){

  $('#new_comment_button').on('click', function() {
    event.preventDefault();

    $(this).hide()

    $('body').append('<form id="new_comment" name="new_comment" style="display: block"></form>');
    $('#new_comment').append('<textarea form="new_comment" id="comment-text" placeholder="Your comment here!"/>');
    $('#new_comment').append('<input type="text" id="authorName" placeholder="Your name here!"/>');
    $("#new_comment").append('<input type="submit id="createComment" value="Leave Comment!"/>');
  });
});
