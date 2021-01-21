import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div class="card">
			{/* {format(new Date(day), 'eeee, dd LLLL')} */}
			{list.map((item) => {
				return (<div>
					<div class="day">{format(new Date(day), 'eeee, dd LLLL HH:MM:SS')} <strong class="gap"> </strong> {item?.main.temp } C</div>
				<div class="temperature-1"> Temperatura resimțită: {item?.main.feels_like} C</div>
				<div class="wind"> Viteza vantului: {item?.wind.speed} km/h</div>
				<div class="description" key={item?.weather.description}>Descriere: {item?.weather[0].description} </div></div>) 
			})}
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
