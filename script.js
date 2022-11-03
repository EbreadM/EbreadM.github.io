//making banner animation
window.onload = function() {
	const banner = document.getElementById("banner");
	const logo = document.getElementById("logo");
	let deg = 100;
	const timer = setInterval(function() {
		banner.style = 'background-image: linear-gradient(' + deg + 'deg, #32327c, #32327c 5%, #703e79 6%, #703e79 26%, #844572 27%, #844572 51%, #32327c 52%, #32327c 100%';
		logo.style = 'opacity: ' + (10.8-0.1*deg)**2 + '%';
		deg -= 2;
		if (deg < 8) {
			clearInterval(timer);
		}
	}, 10);
	//making nav bar toggle
	const toggleButton = document.getElementsByClassName('toggle-button')[0];
	const navbarLinks = document.getElementsByClassName('navbar-links')[0];

	toggleButton.addEventListener('click', () => {
		navbarLinks.classList.toggle('active')
})
}
