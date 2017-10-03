$(document).ready(function(){
    $("#comment_form").hide();
    $("#text_box").hide();
  $("#comments").on("submit", function() {
    $("#comment_form").show();
    //jQuery(html [, ownerDocument]);
    //let comment = e.data.val();
  });
});
