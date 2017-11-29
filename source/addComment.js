$(document).ready(function(){
  $('#new_comment_button').click(function() {
    $( "#new_comment_button" ).hide()
    $( "<form id='new_comment'><textarea rows='4' cols='50' name='comment'></textarea><br>Name: <input type='text' name='name'> <input type='submit' value='Create Comment'></form><br>" ).appendTo( "body" );
    $( "#new_comment").show()
    $( "#new_comment" ).submit(function() {
      var comment = $("textarea[name=comment]").val()
      var name = $("input[name=name]").val()
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
})
