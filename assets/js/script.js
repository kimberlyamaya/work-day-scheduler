// global variables //
var todayTime = moment().format("ha");
//var todayTime = "12pm"
var todayDate = moment().format("dddd, MMMM Do, YYYY");
//console.log(rightNow);


// get current day //
$("#currentDay") .text(todayDate);  


// auditTime function //
var auditTime= function() {
    // remove class from all textarea ids
    $("#text-9am, #text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").removeClass("textarea")
    
    //console.log(todayTime);
    // logic, depending on what time is it add class, future, present or past
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
    
// current time functions //

var CurrentTime9am = function() {
    if (moment(todayTime, "ha").isSame(moment('9am', "ha"))) {
        $("#text-9am").addClass("present")
        $("#text-10am, #text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

var CurrentTime10am = function() {
    if (moment(todayTime, "ha").isSame(moment('10am', "ha"))) {
        $("#text-9am").addClass("past")
        $("#text-10am").addClass("present")
        $("#text-11am, #text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

var CurrentTime11am = function() {
    if (moment(todayTime, "ha").isSame(moment('11am', "ha"))) {
        $("#text-9am, #text-10am").addClass("past")
        $("#text-11am").addClass("present")
        $("#text-12pm, #text-1pm, #text-2pm, #text-3pm, #text-4pm, #text-5pm").addClass("future")
    }
}

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


// on click events //
$("#save-icon-9am").on("click",function(event) { 
    event.preventDefault();
    
    // when save-icon button clicked, save notes to local storage
    var notes9am = $("#text-9am").val().trim();
    localStorage.setItem("notes-9am",notes9am);

})

$("#save-icon-10am").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes10am = $("#text-10am").val().trim();
    localStorage.setItem("notes-10am",notes10am);

})

$("#save-icon-11am").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes11am = $("#text-11am").val().trim();
    localStorage.setItem("notes-11am",notes11am);

})

$("#save-icon-12pm").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes12pm = $("#text-12pm").val().trim();
    localStorage.setItem("notes-12pm",notes12pm);

})

$("#save-icon-1pm").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes1pm = $("#text-1pm").val().trim();
    localStorage.setItem("notes-1pm",notes1pm);

})

$("#save-icon-2pm").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes2pm = $("#text-2pm").val().trim();
    localStorage.setItem("notes-2pm",notes2pm);

})

$("#save-icon-3pm").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes3pm = $("#text-3pm").val().trim();
    localStorage.setItem("notes-3pm",notes3pm);

})

$("#save-icon-4pm").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes4pm = $("#text-4pm").val().trim();
    localStorage.setItem("notes-4pm",notes4pm);

})

$("#save-icon-5pm").on("click",function(event) { 
    event.preventDefault();

    // when save-icon button clicked, save notes to local storage
    var notes5pm = $("#text-5pm").val().trim();
    localStorage.setItem("notes-5pm",notes5pm);

})




// load notes function //
var loadNotes = function() {
    // return local storage of on page load
    var currentNotes9am = localStorage.getItem("notes-9am");
    console.log (currentNotes9am);
    $("#text-9am").val(currentNotes9am);

    // return local storage of on page load
    var currentNotes10am = localStorage.getItem("notes-10am");
    console.log (currentNotes10am);
    $("#text-10am").val(currentNotes10am);

    // return local storage of on page load
    var currentNotes11am = localStorage.getItem("notes-11am");
    console.log (currentNotes11am);
    $("#text-11am").val(currentNotes11am);

    // return local storage of on page load
    var currentNotes12pm = localStorage.getItem("notes-12pm");
    console.log (currentNotes12pm);
    $("#text-12pm").val(currentNotes12pm);

    // return local storage of on page load
    var currentNotes1pm = localStorage.getItem("notes-1pm");
    console.log (currentNotes1pm);
    $("#text-1pm").val(currentNotes1pm);

    // return local storage of on page load
    var currentNotes2pm = localStorage.getItem("notes-2pm");
    console.log (currentNotes2pm);
    $("#text-2pm").val(currentNotes2pm);

    // return local storage of on page load
    var currentNotes3pm = localStorage.getItem("notes-3pm");
    console.log (currentNotes3pm);
    $("#text-3pm").val(currentNotes3pm);

    // return local storage of on page load
    var currentNotes4pm = localStorage.getItem("notes-4pm");
    console.log (currentNotes4pm);
    $("#text-4pm").val(currentNotes4pm);

    // return local storage of on page load
    var currentNotes5pm = localStorage.getItem("notes-5pm");
    console.log (currentNotes5pm);
    $("#text-5pm").val(currentNotes5pm);

}

// run functions //
auditTime();
loadNotes();
