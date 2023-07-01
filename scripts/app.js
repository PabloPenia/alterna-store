import data from '../data/productos.json'

function notImplemented() {
	return alert('Function not implemented.')
}

const cartBtn = document.getElementById('cartBtn')
const userBtn = document.getElementById('userBtn')

cartBtn.addEventListener('click', () => showUi(cartBtn))
userBtn.addEventListener('click', () => showUi(userBtn))

function showUi(btn) {
	btn.nextElementSibling.style.display === 'block'
		? (btn.nextElementSibling.style.display = 'none')
		: (btn.nextElementSibling.style.display = 'block')
}

useDisplayProducts('novedades', 'image')

function useDisplayProducts(el, output) {
	const container = document.getElementById(el)
	if (!container) {
		throw new Error('El elemento especificado no existe.')
	}

	let html = ``

	data.forEach((item) => {
		html += `<article>`
		switch (output) {
			case 'image':
				html += `<img src="assets/images/${item.image}" alt=${item.name}>`
			default:
				break
		}
		html += `</article>`
	})
	container.innerHTML = html
}
