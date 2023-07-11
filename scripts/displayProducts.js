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
export async function displayFeaturedProducts(el, output) {
	const dataArr = await getProducts()

	return dataArr.filter((product) => product.featured === true)
}

export async function displayProducts(arr, el, output, cat = -1) {
	const categories = ['sin categoria', 'cintos', 'carteras', 'accesorios']
	const container = document.getElementById(el)
	if (!container) {
		throw new Error('El elemento especificado no existe.')
	}
	const data = await getProducts()
	if (!data || data.length < 1) {
		return
	}

	const products =
		cat >= 0 ? data.filter((item) => item?.cat === cat) : [...data]
	console.log(products)
	let html = `
		${cat >= 0 ? `<h2>${categories[cat]}</h2>` : ''}
		<div class="cards-gallery flex">
	`
	products.forEach((item) => {
		html += `<article>`
		switch (output) {
			case 'card':
				html += `<img src="assets/images/thumbs/${item.image}" alt=${item.name}>`
			default:
				break
		}
		html += `</article>`
	})

	html += `</div>`
	container.innerHTML = html
}
