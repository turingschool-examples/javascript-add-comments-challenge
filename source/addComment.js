function doSomething(){
  event.preventDefault();

  var formInput = $('input[name=comment]').val()

  $('#comment_list').append("<li>"+ formInput +"</li>")
}

$(document).ready(function(){
  $("#add-comment").submit(doSomething)
})
