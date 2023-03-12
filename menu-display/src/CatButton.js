import React from 'react'

const CatButton = ({ catButton, filterItem }) => {
	return (
		<div className="btn-container ">
			{catButton.map((category, index) => {
				return (
					<button
						key={index}
						className="filter-btn"
						onClick={() => filterItem(category)}>
						{category}
					</button>
				)
			})}
		</div>
	)
}

export default CatButton
