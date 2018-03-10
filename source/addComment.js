$(document).ready(function(){
  showOrHideCommentForm();
  createNewComment();
})

function showOrHideCommentForm() {
  $('#new-comment-button').click( () => {
    $('#new-comment').toggle()
  })
}

function createNewComment() {
  $('#create-comment-button').click( () => {
    event.preventDefault();
    let text = $('#comment-text').val();
    let author = $('#author-name').val();
    let newComment = `
      <li>
        ${text}
        <span class="author">~~${author}</span>
      </li>`
    $(newComment).appendTo('#comment-list')
    resetCommentFields();
  })
}

function resetCommentFields() {
  $('#comment-text').val("")
  $('#author-name').val("")
}
