$(document).ready(function(){
  $('#new_comment_button').click(function() {
    event.preventDefault()
    $(this).hide()
    $('#comments').append('<div id="form"><textarea rows="3" cols="60" name="text" placeholder="Your comment here..." /><br><input type ="text" id="author" placeholder="author" /><input type="submit" value="Submit Comment" /></div>')
    $('#comments input[type="submit"]').click(function() {
      event.preventDefault()
      var text = $(this).parent().find('textarea').val()
      var author = $(this).parent().find('input[id="author"]').val()
      if (text) {
        $('#comment_list').append('<li>' + text + '<span class="author">' + author + '</span></li>')
        $('#form').remove()
        $('#new_comment_button').show()
      } else {
        alert("Your comment must have text to submit.")
      }
    })
  })
})
