$(document).ready(function(){
  $('button#new_comment_button').click(function(){
    $('#comments').append('<form id="new_comment" name="new_comment">')
      $('#new_comment').append('<input type="text" name="body" placeholder="Your Comment Here"/>')
      $('#new_comment').append('<input type="text" name="author" placeholder="Author"/>');
      $('#new_comment').append('<input type="submit" id="create_comment" value="Submit Comment"/>');
    $('#comments').append('</form>')
    $('#new_comment').show();
  });

  $('#comments').submit(function(event){
    var body = $("input[name=body]").val();
    var author = $("input[name=author]").val();
    $('#comment_list').append(`<li> ${body} <span class="author"> ${author} </span> </li>`)
    event.preventDefault();
  })
});
