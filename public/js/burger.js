$(document).ready(function() {

    $("#burger-submit").click(function(e) {
        e.preventDefault();
        var burgerName = $("#add-burger").val().trim();

        $.post("/api/addburger", { burger_name: burgerName })
            .then(function(data) {
                $("#add-burger").val("");
                alert("Burger added!");
            });
    });


});