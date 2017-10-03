$(document).ready(function(){
    //$("#comment_form").hide(300).show(300);
    $("textarea").hide();
    $("#submit_button").hide();
  $("button").on("click", function() {
    //$("#comment_form").show();
    $("textarea").show();
    $("#submit_button").show();
    //jQuery(html [, ownerDocument]);
    //let comment = e.data.val();
  });
});
