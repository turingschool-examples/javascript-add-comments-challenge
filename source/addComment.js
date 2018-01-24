$(document).ready(function(){
  $('#new_comment_button').on('click', function () {

    var comment = '<textarea placeholder="Comment:" name="comment"></textarea><br>'
    var author = '<input type="text" placeholder="Name:" name="author"><br>'
    var submit = '<input type="button" value="Submit" id="submit-comment">'

    $('#comments').append(`<form id="new_comment"> ${comment} ${author} ${submit} </form>`)
    $('#new_comment').show();
  })

  $('body').on('click', '#submit-comment', function (event) {

    var comment = $('[name="comment"]').val();
    var author = $('[name="author"]').val();

    if (comment === '') {
      alert('plz comment')
    } else {
      $('#comment_list').append(`<li> ${comment}<span class='author'>${author}</span></li>`)
    }
    event.preventDefault();
  })
})
