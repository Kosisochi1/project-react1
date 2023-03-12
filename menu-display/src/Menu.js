import React from 'react'

const Menu = ({ menuItem }) => {
	return (
		<div className="section-center">
			{menuItem.map((item) => {
				const { category, id, price, img, desc, title } = item
				return (
					<article className="menu-item" key={id}>
						<img src={img} alt={title} className="photo" />

						<div className="header">
							<header>
								<h4 className="text-info">{title}</h4>
								<h4 className="price"> ${price}</h4>
							</header>
							<p className="decs">{desc}</p>
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default Menu
