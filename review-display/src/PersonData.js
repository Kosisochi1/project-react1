import React, { useState } from 'react'
import data from './Data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const PersonData = () => {
	const [index, setIndex] = useState(0)
	const { id, name, image, text, job } = data[index]
	const checkNumber = (number) => {
		if (number > data.length - 1) {
			return 0
		}
		if (number < 0) {
			return data.length - 1
		}
		return number
	}

	const nxt = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex)
		})
	}
	const prev = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex)
		})
	}
	const randomView = () => {
		let randomNun = Math.floor(Math.random() * data.length)
		if (randomNun === index) {
			randomNun = index + 1
		}
		setIndex(checkNumber(randomNun))
		console.log(checkNumber(randomNun))
	}

	return (
		<article className="main-review">
			<div className="image-container">
				<img src={image} alt={name} className="main-image" />
				<span className="image-icon">{<FaQuoteRight />}</span>
			</div>
			<h2 className="name">{name}</h2>
			<p className="job">{job}</p>
			<p>{text}</p>
			<div>
				<button className="prv" onClick={prev}>
					<FaChevronLeft />
				</button>
				<button className="nxt" onClick={nxt}>
					<FaChevronRight />
				</button>
			</div>
			<button className="btn" onClick={randomView}>
				Random-View
			</button>
		</article>
	)
}

export default PersonData
