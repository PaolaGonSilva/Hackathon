let homeView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('Form');

        $('#content').empty();
        $('#content').html(
            "<form id='myForm'>" +
            "<label>Name</label>" +
            "<input type='text' class='normal' id='name' min='18'>" +
            "<span id='name-error' class='error' style='display: none;'>Please insert more than 3 letters</span>" +

            "<label>Age</label>" +
            "<input type='number' class='normal' id='age'>" +
            "<span id='age-error' class='error' style='display: none;'>Please enter a valid age (numeric characters only) and age must be at least 18.</span>" +

            "<label>City</label>" +
            "<input type='text' class='normal'>" +

            "<label>Country</label>" +
            "<input type='text' class='normal'>" +

            "<label>Opções</label>" +
            "<select id='select'>" +
            "<option>Select One Option</option>" +
            "<option>Welcoming war victims</option>" +
            "<option>Create Solidarity Event</option>" +
            "<option>Be a volunteer</option>" +
            "</select>" +
            "<span id='select-error' class='error' style='display: none;'>Please choose one option.</span>" +

            "</form>");



        $('#start').html('Submeter');
        $("#start").on("click", () => {
            homeView.validate();
        })
        $(document).keyup(event => {
            if (event.key == "Enter") {
                homeView.validate();
            }
        })

    },
    validate: () => {
        var selectValue = $('#select').val();
        var ageValue = $("#age").val();
        var nameValue = $("#name").val();
        console.log(nameValue.split("").length);
        if(nameValue.split("").length<3) {
            $("#name-error").show();
        }
        if(selectValue === "Select One Option"){
            $("#select-error").show();
        }
        if (!$.isNumeric(ageValue) || ageValue < 18) {
            $("#age-error").show();
        } else {
            $("#age-error").hide();
            window.location.hash = "home";
        }
    }
}

export default homeView;