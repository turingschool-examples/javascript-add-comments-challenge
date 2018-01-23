$(document).ready(function(){
  $('#new_comment_button').on("click", function()  {
    $('body').append('<form id="new-comment"></form>');
    $('#new-comment').append('<label for "comment-content">Comment</label>')
    $('#new-comment').append('<input type="text" name="comment-content" required>')
    $('#new-comment').append('<label for "author">Author</label>')
    $('#new-comment').append('<input type="text" name="comment-author">')
    $('#new-comment').append('<input type="submit" name="submit-comment" value="Submit Comment">')

    $('#new-comment').on("submit", function() {
      event.preventDefault();
      var comment = $('[name=comment-content]').val();
      var author = $('[name=comment-author]').val();
      $('#comment_list').append('<li>comment<span class="author">author</span></li>')
      $("#new-comment").remove();
    })
  })

})
