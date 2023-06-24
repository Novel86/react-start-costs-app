// import { useState } from 'react';
import './Diagram.css';
import DiagramBar from './DiagramBar/DiagramBar';

const Diagram = (props) => {
	const dataSetValues = props.dataSets.map((item) => item.value);

	const maxValue = Math.max(...dataSetValues);

	return (
		<div className='diagram'>
			{props.dataSets.map((item) => {
				return (
					<DiagramBar
						key={item.label}
						value={item.value}
						maxValue={maxValue}
						label={item.label}
					/>
				);
			})}
		</div>
	);
};

export default Diagram;
