$(document).ready(function(){
  $('#new_comment_button').on('click', () => {
    // prevent the default action of submitting the form,
    // which would otherwise be to send an HTTP request to submit the form
    event.preventDefault()

    $('#comments').append(`
      <form id="new_comment">
        <textarea name="comment" type="textarea" placeholder="Your comment here..."></textarea>
        <input name="author" placeholder="author"></input>
        <button id="submit-comment-button">Submit Comment</button>
      </form>
    `)
  })

  $('#comments').on('click', '#submit-comment-button', () => {
    event.preventDefault();
    const comment = $('textarea[name=comment]').val();
    const author = $('input[name=author]').val();


    comment_template = `
      <ul id="comment_list">
        <li>
          ${comment}
          <span class="author">${author}</span>
        </li>
      </ul>
    `

    $('#comment_list').append(comment_template)

  })
})
