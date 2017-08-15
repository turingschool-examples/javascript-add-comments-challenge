$(document).ready(function(){
  let form = '<div id="comment_form">' +
                '<form class="form">' +
                  '<h3>New Comment</h3>' +
                  '<br/>' +
                  '<label>Name:</label>' +
                  '<br/>' +
                  '<input type="text" id="new_name" placeholder="Name"/><br/>' +
                  '<br/>' +
                  '<label>Text:</label>' +
                  '<br/>' +
                  '<textarea id="new_comment_text" placeholder="comment..."></textarea><br/>' +
                  '<br/>' +
                  '<input type="button" id="submit" value="Submit"/>' +
                  '<input type="button" id="cancel" value="Cancel"/>' +
                  '<br/>' +
                '</form>' +
              '</div>'

  function showForm() {
    $('#comments').append(form)
  }

  function deleteForm() {
    $('#comment_form').remove()
  }

  function appendNewComment(name, text) {
    $('#comment_list').append(`<li>${text}<span class="author">${name}</span></li>`)
  }

  $('#new_comment_button').on('click', (event) => {
    showForm()
  })

  $('#comments').on('click', '#submit', (event) => {
    let name = $('#new_name').val()
    let text = $('#new_comment_text').val()

    if (name.length !== 0 && text.length !== 0) {
      deleteForm()
      appendNewComment(name, text)
    } else {
      alert('Name and Comment fields are required')
    }
  })

  $('#comments').on('click', '#cancel', (event) => {
    deleteForm()
  })
})