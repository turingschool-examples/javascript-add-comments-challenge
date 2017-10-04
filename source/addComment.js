$(document).ready(function(){
    $('#form').hide();

    $('#new_comment_button').on('click',() => {
        $('#form').toggle();
    });

    function formcheck(comment, author) {
        if (comment = '')
            return false;
        else
            return true
    }

    function refresh() {
        $('#form').toggle(!formcheck)
    }

    $('#form').submit( (event) =>  {

        let comment = $('#form :input')[0].value;
        let author = $('#form :input')[1].value;
        event.preventDefault();

        if (formcheck(comment, author) == true) {
            $('#comment_list').append('<li>' + comment + '<span class="author">' + author + '</span>' + '</li>');
            $('#form').hide();
            $('#form').trigger('reset');
            refresh();
        }
    })
});
