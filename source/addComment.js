function addComment(){
  event.preventDefault();

  var formComment = $('input[name=comment]').val()
  var formAuthor = $('input[name=author]').val()

  $('#comment_list').append("<li>"+ formComment + "<span class = 'author'>" + formAuthor +" </span></li>")
}

$(document).ready(function(){
  $("#add-comment").submit(addComment)
})
