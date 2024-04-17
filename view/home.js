let homeView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('Home Page');

        $('#content').empty();
        $('#content').html();
            

    
        $('#start').html('Começar');
        $("#formbutton").on("click", () => {
            window.location.hash = "form";
        })
        $(document).keyup(event => {
            if (event.key == "Enter") {
                window.location.hash = "form";
            }
        })
    }
}

export default homeView;