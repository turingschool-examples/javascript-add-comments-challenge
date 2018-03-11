$(document).ready(function(){
  <form id="new_comment"><textarea></textarea>
  <input type="text" id="authorName" value="Your Name">
  <input type="submit" value="Submit Comment">
  </form>
})


// Here is a sequence of events and requirements for this feature:

// When the user clicks on the New Comment button, the new comment form should appear.
// When the user enters text into the two fields and presses the Create Comment button, a new comment should be created and added to the end of the comment list.
// A new comment should not be empty, i.e. if the user submits the form without entering anything into the text area, an empty comment element should not be created. A user can submit the form without adding in the author's information though.
// Make sure to follow the specifications, and remember to take it slow. Verify your assumptions before getting ahead of yourself.

// <ul id='comment_list'>
//   <li>
//     Your post is great! Really enjoyed reading it :)
//     <span class='author'>Penelope Piper</span>
//   </li>
// </ul>



// I need to add a <li> and a <span> with an author name if any.
//  AM I SUPPOSED TO TDD THIS?
//  * right now there is no input for a comment at all. I need to write the following functionality: When you click the button, the input form should appear
//  * comments can't be created if blank
//  * comments can be created if author is blank
//  * if author is blank, the element should not be created
