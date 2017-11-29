$(document).ready(function(){

$( "#new_comment_button").on("click", function() {
   $("#new_comment_button").hide();

   let new_form = '<form id="new_comment"></form>'
   $('body').append(new_form);
   $("#new_comment").show();
   $("#new_comment").append('<input type="text" name="author" value="author name"><br>')
   $("#new_comment").append('<textarea name="content" value="content">')
   $("#new_comment").append('<input type="submit" value="submit">')

});

$("body").on( "submit", function() {
  event.preventDefault();

  let author = $(new_comment[name="author"]).val();
  let content= $(new_comment[name="content"]).val();

  $("#comment_list").append(`<li> ${content}<span class="author">${author}</span></li>`)

  $('#new_comment').hide();

});


})
