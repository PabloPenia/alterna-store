async function getProducts() {
	try {
		const response = await fetch('../data/productos.json')

		if (!response.ok)
			throw new Error('Ha ocurrido un error. ', response.statusText)

		const products = await response.json()
		return products
	} catch (error) {
		console.log(error)
	}
}

export default async function displayProducts(el, output) {
	const container = document.getElementById(el)
	if (!container) {
		throw new Error('El elemento especificado no existe.')
	}
	const data = await getProducts()
	if (!data || data.length < 1) {
		return
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
