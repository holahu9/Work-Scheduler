$(document).ready(function(){

    var hour = moment().hours();

    //Moment.js date for top of page
    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
//Color coding schedule dependant upon hour
function colorSchedule(){
    $("input").each(function(){
        var rowHour = $(this).attr("id");
        var rowNumber = parseInt(rowHour);
        if (rowNumber === hour){
            $(this).addClass("present");
        } else if (rowNumber < hour){
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    });
};

//Rendering stored inputs after page refresh
function renderStoredInputs(){
    $(".event").each(function(){
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
};



    
});