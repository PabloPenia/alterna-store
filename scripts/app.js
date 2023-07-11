import displayProducts from './displayProducts.js'

const pathname = window.location.pathname
switch (pathname) {
	case '/':
	case '/index.html':
		displayProducts('destacados', 'card')
	default:
		break
}

const cartBtn = document.getElementById('cartBtn')
const userBtn = document.getElementById('userBtn')
const searchBtn = document.getElementById('searchBtn')

cartBtn.addEventListener('click', () => showUi(cartBtn))
userBtn.addEventListener('click', () => showUi(userBtn))
searchBtn.addEventListener('click', () => showUi(searchBtn))

function showUi(btn) {
	btn.nextElementSibling.style.display === 'block'
		? (btn.nextElementSibling.style.display = 'none')
		: (btn.nextElementSibling.style.display = 'block')
}
