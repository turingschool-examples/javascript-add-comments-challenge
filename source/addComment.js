const commentForm = "<div class='container'><form id='comment-form' name'?'><textarea name='comment' placeholder='My new comment!' style='width:300px; height:50px'></textarea></br><input name='author' placeholder='Author' /><input type='submit' value='Submit Comment' /></form></div>";

$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    $(commentForm).appendTo('body');
  });
})
