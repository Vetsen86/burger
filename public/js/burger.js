$(document).ready(function() {

    $("#burger-submit").click(function(e) {
        e.preventDefault();
        var burgerName = $("#add-burger").val().trim();

        $.post("/api/addburger", { burger_name: burgerName })
            .then(function() {
                console.log(".then ran");
                location.reload();
            });
    });

    $(".devour").click(function() {
        var burgerId = $(this).attr("data-burger-id");

        $.ajax({
            type: 'PUT',
            url: '/api/devour',
            data: {
                burgerId: burgerId
            },
            success: function(data) {
                location.reload();
            }
        });
    });


});