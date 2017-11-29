$(document).ready(function(){
  var createCommentPanel = function() {
    $('#comment_list').append('<form id="temp-comment"><input name="temp-com" placeholder = "Your comment here"/>')
    $('#comment_list').append('<form id="temp-name"><input name="temp-n" placeholder = "Your name here"/>')
    $('#comment_list').append('<input type="submit" id="temp-submit" name="add-comment"value="Add your comment!"></form>')
      document.getElementById("myBtn").addEventListener("click", function(){
        var newCommentName = document.forms[0].elements[0]
        var newCommentName = document.forms[0].elements[1]
        debugger
        $('#comment_list').remove("#temp-comment")
        $('#comment_list').remove("#temp-name")
        $('#comment_list').remove("#temp-submit")
      });
    });
  }
  
  var createNewComment = function() {
    
  
  $("button[name='new_comment_button']").on('click', createCommentPanel)
  $("#temp-submit").on('click', createNewComment)
})
