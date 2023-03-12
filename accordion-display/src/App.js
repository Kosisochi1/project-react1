import React, { useState } from 'react'
import data from './Data'
import AccordionQuestion from './AccordionQuestion'

function App() {
	const [question, setQuestion] = useState(data)

	return (
		<main>
			<div className="container">
				<h2>Questions and answers about login</h2>
				<section>
					{question.map((item) => {
						return <AccordionQuestion key={question.id} item={item} />
					})}
				</section>
			</div>
		</main>
	)
}

export default App
