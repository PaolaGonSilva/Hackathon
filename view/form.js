import eventImp from "../view/events.js";

let homeView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('Form');

        $('#content').empty().html(`
            <form id='myForm'>
                <label>Name</label>
                <input type='text' class='normal' id='name' min='18'>
                <span id='name-error' class='error' style='display: none;'>Please insert more than 3 letters</span>

                <label>City</label>
                <input type='text' class='normal' id='city'>

                <label>Country</label>
                <input type='text' class='normal' id='country'>

                <label>Message</label>
                <input type='text' class='' id='message'>
                
            </form>
            <button id='centro' class='back'>Go Back</button>
        `);


        $('.back').on("click", () => {
            console.log("cascas");
            window.location.hash = "event"
        });

        $('#start').html('Submit');

        $('#start').on("click", () => {
            submitForm();
        });


        $(document).keyup(event => {
            if (event.key === "Enter") {
                submitForm();
            }
        });
    },

    validate: () => {
        let ok = true;
        const nameValue = $("#name").val().trim();
        if (nameValue.length < 3) {
            $("#name-error").show();
            ok = false;
            eventImp.eventExample.pop()
        } else {
            $("#name-error").hide();
            window.location.hash = "events"
        }

        return ok;
    }
};

function submitForm() {


    const newEvent = {
        name: $("#name").val().trim(),
        city: $("#city").val().trim(),
        country: $("#country").val().trim(),
        message: $("#message").val().trim()
    };

    eventImp.eventExample.push(newEvent);
    clearForm();
    validate();
}

function clearForm() {
    $("#name").val('');
    $("#city").val('');
    $("#country").val('');
    $("#message").val('');
}


export default homeView;
