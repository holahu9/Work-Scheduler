

$(document).ready(function(){

    var hour = moment().hours();

    // function to get the current date //
    function getDate(){
        $("#currentDate").text(moment().format('MMMM Do, h:mm:ss'));
    };

  // function to assign the colors dependant upon hour
    function color(){
        $("input").each(function(){
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour){
                $(this).addClass("today");
            } else if (rowNumber < hour){
                $(this).addClass("yesterday");
            } else {
                $(this).addClass("tomorrow");
            };
        });
    };

  // save the user input to local storage after page refresh
    function inputs(){
        $(".event").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };
 //Click event to save user input in local storage
    
    $(".save").click(function(){
        var scheduleInputs = $(this).siblings(".event").val();
        var inputsLocation = $(this).siblings(".event").attr("id");
        localStorage.setItem(inputsLocation,scheduleInputs);
    });
    // retrieve the above functions.

    setInterval(getDate,1000);
    color();
    setInterval(color,1000);
    inputs();

});