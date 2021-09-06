
var currentDay = document.querySelector("#currentDay");
// var currentHour = document.querySelector("#currentHour");
var colorChange = [
    document.getElementById("div-9"),
    document.getElementById("div-10"),
    document.getElementById("div-11"),
    document.getElementById("div-12"),
    document.getElementById("div-13"),
    document.getElementById("div-14"),
    document.getElementById("div-15"),
    document.getElementById("div-16"),
    document.getElementById("div-17"),
]

var hourNow = moment().hours();

window.onload = function() {
    nine();
    ten();
    eleven();
    twelve();
    thirteen();
    fourteen();
    fifteen();
    sixteen();
    seventeen();
}

function updateTime() {
    var now = moment();
    var pseudo = now.format("LL hh:mm ss A");

    currentDay.textContent = pseudo;

    for (var i = 0; i < colorChange.length; i++) {
        var currentDiv = parseInt(colorChange[i].id.split("-")[1]);
        if (currentDiv < hourNow){
            colorChange[i].className = "past col-sm-8 row";
        };
    }
    for (var i = 0; i < colorChange.length; i++) {
        var currentDiv = parseInt(colorChange[i].id.split("-")[1]);
        if (currentDiv > hourNow){
            colorChange[i].className = "future col-sm-8 row";
        };
    }
    for (var i = 0; i < colorChange.length; i++) {
        var currentDiv = parseInt(colorChange[i].id.split("-")[1]);
        if (currentDiv === hourNow){
            colorChange[i].className = "present col-sm-8 row";
        };
    }
}

// var buttonEl1 = document.querySelector("#save-1");

// buttonEl1.addEventListener("click", myFunction);

// function myFunction() {
//     var x = document.getElementById("scheduled-1").value;
//     document.getElementById("scheduled-1").innerHTML = x;
// }

function nine() {
    var text = document.getElementById("scheduled-1");
    var output = document.getElementById("scheduled-1");
    var buttonEl1 = document.getElementById("save-1");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-1");
    text.value = sessionStorage.getItem("scheduled-1");

    function Output() {
        sessionStorage.setItem("scheduled-1", text.value);
        output.textContent = text.value;
    };
};

function ten() {
    var text = document.getElementById("scheduled-2");
    var output = document.getElementById("scheduled-2");
    var buttonEl1 = document.getElementById("save-2");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-2");
    text.value = sessionStorage.getItem("scheduled-2");

    function Output() {
        sessionStorage.setItem("scheduled-2", text.value);
        output.textContent = text.value;
    };
};

function eleven() {
    var text = document.getElementById("scheduled-3");
    var output = document.getElementById("scheduled-3");
    var buttonEl1 = document.getElementById("save-3");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-3");
    text.value = sessionStorage.getItem("scheduled-3");

    function Output() {
        sessionStorage.setItem("scheduled-3", text.value);
        output.textContent = text.value;
    };
};

function twelve() {
    var text = document.getElementById("scheduled-4");
    var output = document.getElementById("scheduled-4");
    var buttonEl1 = document.getElementById("save-4");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-4");
    text.value = sessionStorage.getItem("scheduled-4");

    function Output() {
        sessionStorage.setItem("scheduled-4", text.value);
        output.textContent = text.value;
    };
};

function thirteen() {
    var text = document.getElementById("scheduled-5");
    var output = document.getElementById("scheduled-5");
    var buttonEl1 = document.getElementById("save-5");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-5");
    text.value = sessionStorage.getItem("scheduled-5");

    function Output() {
        sessionStorage.setItem("scheduled-5", text.value);
        output.textContent = text.value;
    };
};

function fourteen() {
    var text = document.getElementById("scheduled-6");
    var output = document.getElementById("scheduled-6");
    var buttonEl1 = document.getElementById("save-6");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-6");
    text.value = sessionStorage.getItem("scheduled-6");

    function Output() {
        sessionStorage.setItem("scheduled-6", text.value);
        output.textContent = text.value;
    };
};

function fifteen() {
    var text = document.getElementById("scheduled-7");
    var output = document.getElementById("scheduled-7");
    var buttonEl1 = document.getElementById("save-7");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-7");
    text.value = sessionStorage.getItem("scheduled-7");

    function Output() {
        sessionStorage.setItem("scheduled-7", text.value);
        output.textContent = text.value;
    };
};

function sixteen() {
    var text = document.getElementById("scheduled-8");
    var output = document.getElementById("scheduled-8");
    var buttonEl1 = document.getElementById("save-8");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-8");
    text.value = sessionStorage.getItem("scheduled-8");

    function Output() {
        sessionStorage.setItem("scheduled-8", text.value);
        output.textContent = text.value;
    };
};

function seventeen() {
    var text = document.getElementById("scheduled-9");
    var output = document.getElementById("scheduled-9");
    var buttonEl1 = document.getElementById("save-9");

    buttonEl1.addEventListener("click", Output);

    output.textContent = sessionStorage.getItem("scheduled-9");
    text.value = sessionStorage.getItem("scheduled-9");

    function Output() {
        sessionStorage.setItem("scheduled-9", text.value);
        output.textContent = text.value;
    };
};



setInterval(updateTime, 1000);
updateTime();

// function updateHour() {
//     hourNow = moment().hours(Number);

//     console.log(hourNow);
// }
// setInterval(updateHour, 1000*60);
// updateHour();


