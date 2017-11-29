$(document).ready(function(){
  newCommentListener();
});

function newCommentListener() {
  let $newComment = $('#new_comment_button');
  $newComment.on('click', (event) =>{
    showForm();
    $newComment.hide();
    submitCommentListener();
  });
};

function submitCommentListener() {
  $('#new-comment').on('submit', (event) => {
    event.preventDefault();
    let comment = $('[name=comment]').val();
    let author = $('[name=author]').val();
    if (comment == '') {
      alert('You must enter a comment!');
    } else {
      $('#comment_list').append(`<li>${comment}<span class="author">${author}</span></li>`);
      $('#new-comment').remove();
      $('#new_comment_button').show();
    };
  });
};

function showForm() {
  let textarea = '<textarea placeholder="Your comment here" name="comment"></textarea></br>';
  let author = '<input type="text" placeholder="Author name" name="author" /></br>';
  let submit = '<input type="submit" value="Submit Comment" id ="submit_comment_button"/>';
  $('#comments').append('<form id ="new-comment">' + textarea + author + submit + '</form>');
};
