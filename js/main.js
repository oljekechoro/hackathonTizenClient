var SERVER_URL;
var DELAY = 2000;

window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    setInterval(getFromPi, DELAY);
};

function onError(){
	console.log("Что-то с сервером :(");
}

function setIp(){
	var a = $("#ip").val();
	SERVER_URL = a;
	getFromPi();
}

function show(data){
	$("#field").empty();
	$("#field").append(data);
}

//Предполагается, что малинка дает html-код(но не код целой странички)
function getFromPi(){
	$.ajax({
		url: "http://"+SERVER_URL+":80/index.php",
		type: "GET",
		dataType: "text",
		success: show,
		error: onError 
	})
}