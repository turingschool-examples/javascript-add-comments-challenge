$(document).ready(function(){

  $( "#new_comment_button" ).click(function() {
    $("#new_comment").show();
    $( "#new_comment_button" ).hide();
  });

  $( 'form#new_comment input[type="submit"]' ).click(function(event) {
    event.preventDefault();
    var textBoxCommentStuff = $( 'form#new_comment textarea' ).val();
    var authorNameThing = $( 'form#new_comment input#authorName' ).val();

    if (textBoxCommentStuff != "") {
      $( `<li>${textBoxCommentStuff}<span class="author">${authorNameThing}</span>
      </li>` ).appendTo( 'ul#comment_list' );

      var textBoxCommentStuff = $( 'form#new_comment textarea' ).val("Your comment here...");
      var authorNameThing = $( 'form#new_comment input#authorName' ).val("");

      $( "#new_comment" ).hide();
      $( "#new_comment_button" ).show();
    }

  });
});
