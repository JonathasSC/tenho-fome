function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition)
	} else {
		document.getElementById("pos").innerHTML = "Nn suportado";
	}
}

function showPosition(position){
	document.getElementById("pos").innerHTML = "Latitude: " + position.coords.latitude +
	"<br>Longitude: " + position.coords.longitude;
	
	var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
	.openPopup();
}