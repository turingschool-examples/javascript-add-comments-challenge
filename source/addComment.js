const commentForm = "<div class='container'><form id='comment-form' name'?'><textarea name='comment' placeholder='My new comment!' style='width:300px; height:50px'></textarea></br><input name='author' placeholder='Author' /><input type='submit' value='Create Comment' /></form></div>";

$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    $(commentForm).appendTo('#comments');
  });

  $('#comments').on('submit', '#comment-form', function() {
    let comment = $('textarea[name=comment]').val();
    let author = $('input[name=author]').val();
    if (comment.length === 0) {
    } else {
      $(`<li>${comment}<span class='author'>${author}</span</li>`).appendTo('ul');
    }
    event.preventDefault();
    $('#comment-form').remove();
  });
})
