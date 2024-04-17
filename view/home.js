let homeView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('Home Page');

        $('#content').empty();
        $('#content').html();
            

    
        $('#start').html('View all Events');
        $("#start").on("click", () => {
            window.location.hash = "event";
        })
        $(document).keyup(event => {
            if (event.key == "Enter") {
                window.location.hash = "event";
            }
        })
    }
}

export default homeView;