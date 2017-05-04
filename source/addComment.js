var form = '<form id="new_comment" name="new_comment">'
         + '<textarea name="comment_text" form="new_comment">Enter a Comment</textarea>'
         + '<input name="author" id="authorName" />'
         + '<input type="submit" value="Add Comment!" />'
         + '</form>';

$(document).ready(function(){
  var appendComment = function(comment){
    $('#comment_list').append(comment);
    $('#new_comment').remove();
    $('#new_comment_button').css('display', 'block');
  }

  var buildComment = function(body,author){
    var newComment = '<li>' + body + '<span class="author">'
                  + author + '</span></li>';
    appendComment(newComment);
  }

  var addComment = function(){
    var commentBody = $('textarea[name=comment_text]').val();
    var commentAuthor = $('input[name=author]').val();
    buildComment(commentBody, commentAuthor);
  }

  var hideNewCommentButton = function(){
    $('#new_comment_button').css('display', 'none');
  }

  var displayForm = function(){
    $('body').append(form);
    $('#new_comment').css('display', 'block');
    hideNewCommentButton();
    $('input[type=submit]').on('click', addComment);
  }
$('button[id=new_comment_button]').on('click', displayForm)
});
