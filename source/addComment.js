let addCommentBtn,
    commentsCont

const commentForm = `
<form id="new_comment" name="comment_form">
  <textarea name="comment" placeholder="Your comment">
  </textarea>
  <input name="author" type="text" placeholder="Author" />
  <input type="submit" value="Add Comment" />
</form>
`

const addComment = (e) => {
  e.preventDefault()
  console.log(addCommentBtn)

  addCommentBtn.hide()

  commentsCont.append(commentForm)
  $('#new_comment').show()
  $('#new_comment').on('submit', submitComment)

}

const addCommentToList = (comment) => {
  const commentList = $('#comment_list')
  const commentEl = `<li>${comment.body}<span class="author">${comment.author}</span></li>`
  commentList.append(commentEl)
}

const submitComment = (e) => {
  e.preventDefault()

  const commentFormEl = $('#new_comment')
  const newComment = {}
  newComment.body = $('#new_comment textarea').val().trim()
  newComment.author = $('#new_comment input[name="author"]').val()

  if (newComment.body === '') {
    alert('Comment must not be blank')
  } else {
    addCommentToList(newComment)

    addCommentBtn.show()
    commentFormEl.remove()
  }
}

$(document).ready(function(){
  addCommentBtn = $('#new_comment_button')
  commentsCont = $('#comments')

  $('#new_comment_button').on('click', addComment)
})
