var SERVER_URL; //Адрес сервера (Raspberry)

window.onload = function() {
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
};

function setIp(){
	//записываем адрес Raspberry, извлекая его из тега <input> с id="ip"
	SERVER_URL = $("#ip").val(); 
	//и перенаправляемся на страничку сервера
	window.location.replace("http://" + SERVER_URL + ":5000/");
}


