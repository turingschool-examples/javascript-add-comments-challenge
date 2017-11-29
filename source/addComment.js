const newComment = "<form id='newComment'><textarea rows='2'></textarea><input type='text' id='yourName' placeholder='Your name'><input type='submit' value='Create Comment'></form>"
// const listItem = "<li><span class='author'></span></li>"
// function listItem(comment, yourName) {
//   return `<li>${comment}<span class='author'>${yourName}</span></li>`
// }


function getCommentBox() {
  // console.log("getting comment box")
  $('#comments').append(newComment)
}



$(document).ready(function(){
  // add your code here
  $('#new_comment_button').on('click', getCommentBox)

  $('#new_comment_button').submit(function(e){
    e.preventDefault();
    const comment = $('#new_comment textarea').val();
    const yourName = $('#yourName').val();
    const listItem = `<li>${comment}<span class='author'>${yourName}</span></li>`
    $('#comment_list').append(listItem)
  })

})
