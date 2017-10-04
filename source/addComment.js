$(document).ready(function(){
  $('form').hide();
  $('#comment_list').append($('<input />', {}))
  $('#new_comment_button').on('click', function(){
    // $('#new_comment_button').hide();
    // $('form').show();
  });
  $('form').submit(function(event) {
    event.preventDefault();
    var comment = $('input[name=comment]').val();
    var author = $('input[name=author]').val();
  })
});
