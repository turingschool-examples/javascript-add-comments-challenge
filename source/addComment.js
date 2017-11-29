$(document).ready(function(){

  $('#new_comment_button').click(function() {
    $('#new_comment_button').hide()
    $('body').append('<form id="new_comment">Comment:<br><textarea rows="4" cols="50" name="body" value="body"></textarea><br><br>Name:<br><input id="authorName" type="text" name="name"><input type="submit" value="Submit"></form>')
    $('#new_comment').show()

    $('#new_comment').submit(function(event) {
      var name = $('input[name=name]').val()
      var body = $('textarea[name=body]').val()
      if(body.length === 0) {
        alert('You must enter a comment to post!')
      }
      else {
        $('ul').append(`<li>${body}<span class="author">${name}</span></li>`)
        event.preventDefault()
      }
      $('#new_comment').remove()
      $('#new_comment_button').show()
    })
  })
})
