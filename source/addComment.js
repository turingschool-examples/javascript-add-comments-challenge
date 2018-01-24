$(document).ready(function(){
  $('#new_comment_button').click(function() {
    $( "#new_comment_button" ).hide()
    $("#comments").append("<form id='new_comment'></form>")
    $("#new_comment").show();
    $('#new_comment')
      .append('<textarea name="comment" value="Post Body">')
      .append('<input type="text" name="authorName" value="Author Name"> <br>')
      .append('<input type="submit" id="submit_comment">')

    $( "#new_comment" ).submit(function() {
      var comment = $("textarea[name=comment]").val()
      var name = $("input[name=authorName]").val()
      if (comment.length === 0) {
        alert("To submit, please provide a comment.")
      } else {
        $( "#new_comment_button" ).show()
        $("#comment_list").append( "<li>" + comment + "<span class='author'>" + name + "</span></li>" )
        $("#new_comment").remove()
        event.preventDefault();
      }
    })
  });
});
