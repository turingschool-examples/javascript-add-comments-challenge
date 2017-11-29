$(document).ready(function(){
  let newComment = $('#new_comment_button');
  newComment.on('click', (event) =>{
    createForm();
    newComment.hide();
    submitComment();
  });
})

function submitComment() {
  $('#new-comment').on('submit', (event) => {
    let comment = $('[name=comment]').val();
    let author = $('[name=author]').val();
    event.preventDefault();
    if (comment == '') {
      alert('Please enter a comment before posting.');
    } else {
      $('#comment_list').append(`<li>${comment}<span class="author">${author}</span></li>`);
      $('#new-comment').remove();
      $('#new_comment_button').show();
    };
  });
};

function createForm() {
  let commentBody = '<textarea placeholder="Your comment here..." name="comment"></textarea></br>';
  let commentAuthor = '<input type="text" placeholder="Author" name="author" /></br>';
  let submit = '<input type="submit" value="Submit Comment" id ="submit_comment_button"/>';
  $('#comments').append('<form id ="new-comment">' + commentBody + commentAuthor + submit + '</form>');
};
