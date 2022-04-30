const toggleMenu = document.querySelector('nav .toggle-menu');
const navMenu = document.querySelector('nav .nav-menu');

toggleMenu.addEventListener('click', function () {
	navMenu.classList.toggle('show');

	if(navMenu.classList.contains('show')) {
		this.classList.replace('bx-menu', 'bx-x');
	} else {
		this.classList.replace('bx-x', 'bx-menu');
	}
})


const allSection = document.querySelectorAll('section, header');


window.addEventListener('scroll', function () {
	allSection.forEach(item=> {
		if(this.scrollY >= (item.offsetTop - 50) && this.scrollY <= ((item.offsetTop + item.offsetHeight) - 50)) {
			navMenu.querySelector('a.active').classList.remove('active');
			navMenu.querySelector(`a[href="#${item.id}"]`).classList.add('active');
		}
	})
})