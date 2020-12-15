
// function to get the current date //
$(document).ready(function(){

    var hour = moment().hours();

    
    function getDate(){
        $("#currentDate").text(moment().format('MMMM Do, h:mm:ss'));
    };

  // function to assign the colors to present, future, and past.
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

  // save the input to local storage//
    function inputs(){
        $(".event").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    
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