$(document).ready(function () {
  $('#new_comment_button').on('click', function () {
    $('#comments').append(
      '<form id="new_comment"><textarea></textarea><input type="text" id="authorName" placeholder="your name"><input type="submit" value="Submit Comment"></form>'
    )
    $('#new_comment').toggle()
    $('#new_comment_button').toggle()

    $('input[type=submit]').on('click', function (event) {
      event.preventDefault()

      let thisComment = $('textarea').val()
      let thisAuthor = $('#authorName').val()
      if (thisComment != '') {
        $('#comment_list').append(
          `<li> ${thisComment} <span class="author">${thisAuthor}</span></li>`
        )
        $('#new_comment').remove()
        $('#new_comment_button').show()
      } else {
        alert('Please enter your comment again')
      }
    })
  })
})

