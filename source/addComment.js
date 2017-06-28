$(document).ready(function(){
  $( "#new_comment_button" ).on("click", function() {
    event.preventDefault();
    $( "#new_comment_button").hide();
    // When the user clicks on the New Comment button, the new comment form with textarea (cannot be emtpy) and author (can be empty and displays nothing with textarea content after create) should appear.

  });

  // When the user enters text into the two fields and presses the Create Comment button, a new comment should be created and added to the end of the comment list.

  // re-show the new comment button
  // append the new comment to #comment_list

});
