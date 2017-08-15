$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
    $('#new_comment').toggle(
      function(){$('#new_comment').css({display: 'block'})},
      function(){$('#new_comment_button').css({display: 'none'})}
    );
  });

  $('#new_comment').on('submit', function() {
    var comment = $('textarea[name="comment"]').val();
    var author = $('input[name="author"]').val();
    event.preventDefault();
    $('#comment_list').append('<li>' + comment + '<span class="author">' + author + '</span></li>')
    $('#new_comment').toggle(
      function(){$('#new_comment').css({display: 'none'})},
      function(){$('#new_comment_button').css({display: 'block'})}
    );
    $('textarea[name="comment"]').val("");
    $('input[name="author"]').val("");
  });
})
