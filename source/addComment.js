$(document).ready(function(){
  // add your code here
  function formChecker(comment, author) {
    if(comment == "") {
      return false
    } else {
      return true
    };
  };

  $('#new_comment_button').click(function() {
    $('.form').show();
  })

  $('#comment_editor').submit(function(){
    let comment = $('#comment_editor :input')[0].value
    let author = $('#comment_editor :input')[1].value

    if(formChecker(comment, author) == true) {
      $('#comment_list').append('<li>' + comment + '<span class="author">' + author + '</span>' + '</li>');
      $('.form').hide();
    };

    event.preventDefault();

  })
})
