const hamburguer = document.querySelector(".header__hamburguer")
const navMenu = document.querySelector(".header__ul")


hamburguer.addEventListener('click', () => {
	hamburguer.classList.toggle('header__hamburguer--activate');
	navMenu.classList.toggle('header__ul--activate')
})