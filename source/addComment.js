$(document).ready(function(){
  $('#new_comment_button').on('click', () => {
    // prevent the default action of submitting the form,
    // which would otherwise be to send an HTTP request to submit the form
    event.preventDefault()

    $('#comments').append(`
      <form>
        <input name="comment" placeholder="Your comment here..."></input>
        <input name="author" placeholder="author"></input>
        <button id="submit-comment-button">Submit Comment</button>
      </form>
    `)
  })
})
