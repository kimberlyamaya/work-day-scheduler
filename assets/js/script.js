var todayTime = moment().format("ha");
//var todayTime = "12pm"
var todayDate = moment().format("dddd, MMMM Do, YYYY");
//console.log(rightNow);

$("#currentDay") .text(todayDate);  

// if todayTime is past 9am then turn this textarea grey
// if todayTime is before 9am                
var auditTime= function() {
    $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").removeClass("textarea")
    
    //console.log(todayTime);
    if (moment(todayTime, "ha").isBefore(moment('9am', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")

    } else if (moment(todayTime, "ha").isAfter(moment('5pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("past")

    } else if (moment(todayTime, "ha").isSame(moment('9am', "ha"))) {
        CurrentTime9am();

    } else if (moment(todayTime, "ha").isSame(moment('10am', "ha"))) {
        CurrentTime10am();

    } else if (moment(todayTime, "ha").isSame(moment('11am', "ha"))) {
        CurrentTime11am();

    } else if (moment(todayTime, "ha").isSame(moment('12pm', "ha"))) {
        CurrentTime12pm();

    } else if (moment(todayTime, "ha").isSame(moment('1pm', "ha"))) {
        CurrentTime1pm();

    } else if (moment(todayTime, "ha").isSame(moment('2pm', "ha"))) {
        CurrentTime2pm();

    } else if (moment(todayTime, "ha").isSame(moment('3pm', "ha"))) {
        CurrentTime3pm();

    } else if (moment(todayTime, "ha").isSame(moment('4pm', "ha"))) {
        CurrentTime4pm();

    } else if (moment(todayTime, "ha").isSame(moment('5pm', "ha"))) {
        CurrentTime5pm();

    }
}
    
   

// if time is 9 am run this
var CurrentTime9am = function() {
    if (moment(todayTime, "ha").isSame(moment('9am', "ha"))) {
        $("#text-9am").addClass("present")
        $("#text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

// if time is 10am run this
var CurrentTime10am = function() {
    if (moment(todayTime, "ha").isSame(moment('10am', "ha"))) {
        $("#text-9am").addClass("past")
        $("#text-10am").addClass("present")
        $("#text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

// if time is 11am run this
var CurrentTime11am = function() {
    if (moment(todayTime, "ha").isSame(moment('11am', "ha"))) {
        $("#text-9am, #text-10am").addClass("past")
        $("#text-11am").addClass("present")
        $("#text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

// if time is 12pm run this
var CurrentTime12pm = function() {
    if (moment(todayTime, "ha").isSame(moment('12pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am").addClass("past")
        $("#text-12pm").addClass("present")
        $("#text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

var CurrentTime1pm = function() {
    if (moment(todayTime, "ha").isSame(moment('1pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm").addClass("past")
        $("#text-1pm").addClass("present")
        $("#text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

var CurrentTime2pm = function() {
    if (moment(todayTime, "ha").isSame(moment('2pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm").addClass("past")
        $("#text-2pm").addClass("present")
        $("#text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

var CurrentTime3pm = function() {
    if (moment(todayTime, "ha").isSame(moment('3pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm").addClass("past")
        $("#text-3pm").addClass("present")
        $("#text-4pm, #text-5pm").addClass("future")
    }
}

var CurrentTime4pm = function() {
    if (moment(todayTime, "ha").isSame(moment('4pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm").addClass("past")
        $("#text-4pm").addClass("present")
        $("#text-5pm").addClass("future")
    }
}

var CurrentTime5pm = function() {
    if (moment(todayTime, "ha").isSame(moment('5pm', "ha"))) {
        $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm").addClass("past")
        $("#text-5pm").addClass("present")
    }
}

// on click event, store value of textarea 
$("#save-icon-9am").on("click",function(event) { 
    event.preventDefault();
    
    var notes9am = $("#text-9am").val().trim();
    localStorage.setItem("notes-9am",notes9am);

})

// on click event, store value of textarea 
$("#save-icon-10am").on("click",function(event) { 
    event.preventDefault();

    var notes10am = $("#text-10am").val().trim();
    localStorage.setItem("notes-10am",notes10am);

})


// this works!
var loadNotes = function() {
    // return value of on click event
    var currentNotes9am = localStorage.getItem("notes-9am");
    console.log (currentNotes9am);
    $("#text-9am").val(currentNotes9am);

    var currentNotes10am = localStorage.getItem("notes-10am");
    console.log (currentNotes10am);
    $("#text-10am").val(currentNotes10am);
}

auditTime();
loadNotes();
