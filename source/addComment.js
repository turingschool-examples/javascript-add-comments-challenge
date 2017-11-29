$(document).ready(function(){
  var createCommentPanel = function() {
    $('#comment_list').append('<form id="temp-comment"><input name="temp-com" placeholder = "Your comment here"/>')
    $('#comment_list').append('<form id="temp-name"><input name="temp-n" placeholder = "Your name here"/>')
    $('#comment_list').append('<input type="submit" name="add-comment"value="Add your comment!"></form>')
  }
  
  var createNewComment = function() {
    
  }
  
  $("button[name='new_comment_button']").on('click', createCommentPanel)
  $("button[name='add-comment']").on('click', createNewComment)
})
