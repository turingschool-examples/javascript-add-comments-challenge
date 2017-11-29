const commentForm = "<div class='container'><form id='comment-form' name'?'><textarea name='comment' placeholder='My new comment!' style='width:300px; height:50px'></textarea></br><input name='author' placeholder='Author' /><input type='submit' value='Submit Comment' /></form></div>";

const commentPost = "<li>Comment Body<span class='author'>Author Name</span</li>"

$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    $(commentForm).appendTo('body');
  });

  $('body').on('click', '#comment-form', function() {
    $(commentPost).appendTo('ul');
    event.preventDefault();
  });
})
