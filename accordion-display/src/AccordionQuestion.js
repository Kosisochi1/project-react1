import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const AccordionQuestion = ({ item }) => {
	const [showInfo, setShowInfo] = useState(false)
	const { title, info } = item
	return (
		<article className="question">
			<header>
				<h3>{title}</h3>
				<button onClick={() => setShowInfo(!showInfo)} className="btn">
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{info}</p>}
		</article>
	)
}

export default AccordionQuestion
