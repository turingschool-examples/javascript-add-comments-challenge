$(document).ready(function() {
    const commentList = $('#comment_list')
    const commentButton = $('#new_comment_button')
    const commentForm = $('#new_comment')
    const commentSubmit = $("input[type='submit']")
    const newCommentText = $('#new_comment_text')
    const authorName = $('#authorName')

    const cleanUp = () => {
        newCommentText.val('')
        authorName.val('')
        commentForm.hide();
    }

    commentButton.click(function() {
        commentForm.show()
    })

    commentSubmit.click(function(event) {
        event.preventDefault();
        let li = document.createElement('li')
        li.innerHTML = `
                      ${newCommentText.val()} 
                      <span class='author'>${authorName.val()}</span>
                      `
        commentList.append(li)
        cleanUp();
    })
})