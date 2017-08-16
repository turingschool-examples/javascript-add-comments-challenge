$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
  	event.preventDefault();

    $('#new_comment_button').hide();
  	$('.form').show();
  })

  $('input[name="form_submit"]').on('click', function() {
  	event.preventDefault();
  	var post = $('input[name="comment_input"]').val();
  	var author = $('input[name="comment_author"]').val();
    
    if (post === "") {
      alert("Please enter a comment")
    } else {
      var completePost = `<li>${post}<span class="author">${author}</span></li>`
  		$('#comment_list').append(
  			$(completePost))
  		}
  	})
})
