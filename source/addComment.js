$(document).ready(function(){
  $('form').on('submit', function(event) {
    event.preventDefault()
  })
  var newCommentButton = document.getElementById('new_comment_button')
  var submitButton = document.getElementsByTagName('input')[1]

  newCommentButton.addEventListener('click', renderCommentForm)
  submitButton.addEventListener('click', postComment)
})

function renderCommentForm() {
  var commentForm = document.getElementById('new_comment')
  $(commentForm).css('display', 'block')
  clearInputs()
}

function clearInputs() {
  $('input[id=authorName]').val('')
  $('form[id=new_comment] textarea').val('')
}

function hideCommentForm() {
  var commentForm = document.getElementById('new_comment')
  $(commentForm).css('display', 'none')
}

function postComment() {
  var authorName = $('input[id=authorName]').val()
  var comment = $('form[id=new_comment] textarea').val()
  if (comment != '') {
    var listNode = document.createElement("LI")
    var list = document.getElementById('comment_list')
    renderComment(listNode, comment)
    if (authorName !== "") {
      renderAuthor(listNode, authorName
    )}
    list.appendChild(listNode)
    hideCommentForm()
  }
}

function renderComment(listNode, comment) {
  var commentNode = document.createTextNode(comment)
  listNode.appendChild(commentNode)
}

function renderAuthor(listNode, authorName) {
  var authorNode = document.createElement('SPAN')
  var authorNameNode = document.createTextNode(authorName)
  authorNode.classList.add("author")
  authorNode.appendChild(authorNameNode)
  listNode.appendChild(authorNode)
}