$(document).ready(function(){

    var hour = moment().hours();

    //Moment.js date for top of page
    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };

    
});