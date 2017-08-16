$(document).ready(function(){

  $('#new_comment_button').on('click', function(e) {
      $('#comments').append('<form id="comment_form"><input id="author_name" placeholder="your name ..."><input id="new_comment" placeholder="type here..."><input type="submit" placeholder="Submit" ></form>');
      $(this).attr('disabled', 'true');
  });

  $('#comments').on('submit', '#comment_form', function(e) {
    e.preventDefault();
    var author = $('#author_name').val();
    if($('#new_comment').val()) {
      var comment = $('#new_comment').val();
      $('#comment_list').append('<li>' + comment + '<span class="author">' + author + '</span></li>');
      $('#author_name').val('');
      $('#new_comment').val('');
      $('#new_comment_button').removeAttr('disabled');
      $('#comment_form').remove();
    } else {
      alert("Please, compose a comment.");
    }
  })
})
