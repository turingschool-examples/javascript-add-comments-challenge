$(document).ready(function(){
  $('button').click(function(event) {
    event.preventDefault();
    renderForm();
  })
  
  $("input:last-of-type").click(function(event) {
    event.preventDefault();
    var commentBody = document.getElementsByName('comment')[0].value
    var authorName = document.getElementsByName('authorName')[0].value
    $('#comment_list').append(`<li>${commentBody}<span class="author">${authorName}</span></li>`)
    renderForm();   
  })
})

function renderForm() {
  $("form").each(function () {
    if ($(this).css("display") == "none") {
      $('form').show();
      $('button').hide();
    } else {
      $('form').hide();
      $('button').show();
    }
  });
}

