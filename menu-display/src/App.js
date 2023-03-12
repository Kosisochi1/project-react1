import React, { useState } from 'react'
import data from './Data'
import Menu from './Menu'
import CatButton from './CatButton'
const allCategory = ['all', ...new Set(data.map((cat) => cat.category))]

function App() {
	const [menuItem, setMenuItem] = useState(data)
	const [catButton, setCatButton] = useState(allCategory)
	const filterItem = (category) => {
		if (category === 'all') {
			setMenuItem(data)
			return
		}
		const newItem = data.filter((item) => item.category === category)
		setMenuItem(newItem)
	}
	return (
		<main>
			<section className=" main section">
				<div className="title">
					<h2>our menu display</h2>
					<div className="underline"></div>
				</div>
				<CatButton catButton={catButton} filterItem={filterItem} />
				<Menu menuItem={menuItem} />
			</section>
		</main>
	)
}

export default App
