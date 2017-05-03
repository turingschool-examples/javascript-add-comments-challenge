function showForm(){
  $('#new_comment_button')
    .after("<form id='comment' name ='comment'><input name = 'commentBody'/><input class='submit' id='submit' type = 'submit' value='comment' onclick='addComment()'/></form>")
}

function addComment(){
  $('#comment_list').append("<li>" + ";lksjdfg" + "</li>")
}
$(document).ready(function(){
  $('#new_comment_button').click(showForm);
  $('#submit').on(addComment);
    // $('.comment').on('submit', addComment)
})
