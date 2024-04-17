let eventView = {
    show: () => {
        $('.title').html('Events');

        $('#content').empty();
        $('#content').html("<button id='addEvent'>add Event</button>");


        allEvents();
        $('#start').html('Começar');
        $("#addEvent").on("click", () => {
            window.location.hash = "form";
        })
        $('#start').remove();
        $(document).keyup(event => {
            if (event.key == "Enter") {
                window.location.hash = "form";
            }
        })
    },
    eventExample : [{
        name : "Manifest1",
        city : "London",
        country : "United Kingdom",
        message : "teste"
    },{
        name : "Manifest2",
        city : "Paris",
        country : "United Kingdom",
        message : "teste"
    },{
        name : "Manifest3",
        city : "London",
        country : "United Kingdom",
        message : "teste"
    },{
        name : "Manifest4",
        city : "London",
        country : "United Kingdom",
        message : "teste"
    },{
        name : "Manifest5",
        city : "London",
        country : "United Kingdom",
        message : "teste"
    
    },{
        name : "Manifest6",
        city : "London",
        country : "United Kingdom",
        message : "teste"
    
    }]
}

let eventExample = [{
    name : "Manifest1",
    city : "London",
    country : "United Kingdom",
    message : "teste"
},{
    name : "Manifest2",
    city : "Paris",
    country : "United Kingdom",
    message : "teste"
},{
    name : "Manifest3",
    city : "London",
    country : "United Kingdom",
    message : "teste"
},{
    name : "Manifest4",
    city : "London",
    country : "United Kingdom",
    message : "teste"
},{
    name : "Manifest5",
    city : "London",
    country : "United Kingdom",
    message : "teste"

},{
    name : "Manifest6",
    city : "London",
    country : "United Kingdom",
    message : "teste"

},
]

function allEvents() {
    $("#content").append("<p></p>")
    $("#content").append("<p></p>")
    $("#content").append("<p></p>")
    $("#content").append("<p></p>")
    $("#content").append("<table>" +
        "<th>"+
            "<tr>Name</tr>"+
            "<tr>City</tr>"+
            "<tr>Country</tr>"+
            "<tr>Message</tr>"+
        "</th>")
    eventView.eventExample.forEach((each) => $("#content").append("<tr><td>" + each.name + "</td>"+"<td>" + each.city + "</td>"+"<td>" + each.country + "</td>"+"<td>" + each.message + "</td></tr>"))
    $("#content").append("</tr></table");
}

export default eventView;