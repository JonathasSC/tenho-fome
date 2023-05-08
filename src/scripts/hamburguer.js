const hamburguer = document.querySelector(".header__hamburguer")
const navMenu = document.querySelector(".header__ul")

hamburguer.addEventListener('click', () => {
	hamburguer.classList.toggle('header__hamburguer--activate');
	navMenu.classList.toggle('header__ul--activate')
})


function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition)
	} else {
		document.getElementById("pos").innerHTML = "Nn suportado";
	}
}

function showPosition(position){

	
	var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
	.openPopup();
}