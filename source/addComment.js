$(document).ready(function(){
  // add your code here
  $('#new_comment_button').on('click', function(){
    $('#new_comment_button').hide();

    let area = '<textarea placeholder="Comment:" name="comment"></textarea><br>'
    let submitter = '<input type="text" placeholder="Name:" name="author"><br>'
    let submit = '<input type="button" value="Submit" id="submit-comment">'

    $('#comments').append(`<form id="new_comment"> ${area} ${submitter} ${submit} </form>`)
    $('#new_comment').show();
  })
  $('body').on('click', '#submit-comment', function(event){
    let comment = $('[name="comment"]').val();
    let author  = $('[name="author"]').val();

    if(comment === ''){
      alert('You must enter a comment to submit')
    }else {
      $('#comment_list').append(`<li> ${comment}<span class='author'>${author}</span></li>`)
      $('#new_comment').remove();
      $('#new_comment_button').show();
    }
    event.preventDefault();
  })
})
