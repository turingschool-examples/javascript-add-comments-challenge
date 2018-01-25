
  $('button').click(function(event){
    event.preventDefault();
    $('#new_comment_button').hide();
    $('#comments').append(
      `<input type="text" name="comment" id='comment_form' value="">
        <input type="text" name="author" id='author_form' value="">
        <input type="submit" id='form_button' value="button">` );
  })

  $('#comments').on('click', '#form_button', addComment);

  function addComment(event) {
    var newComment = $('#comment_form').val();
    var newAuthor = $('#author_form').val();
    $('#comment_list').append('<li>' + newComment + '<span>' + newAuthor + '</span>'+ '</li>');

}
