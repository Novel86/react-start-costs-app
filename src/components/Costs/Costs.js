import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter/CostsFilter';
import { useState } from 'react';
import CostsList from './CostsList/CostsList';
import CostsDataForDiagram from '../Diagram/CostsDataForDiagram/CostsDataForDiagram';

// можно стрелку, можно обычную функцию
const Costs = (props) => {
	const [selectedYear, setselectedYear] = useState('total');

	const yearChangeHandler = (year) => {
		setselectedYear(year);
	};

	const filtredCosts =
		selectedYear === 'total'
			? props.costs
			: props.costs.filter(
					(item) => item.date.getFullYear().toString() === selectedYear
			  );

	// отображаем контент по условию. Если в выбранном периоде нет расходов, то пишем "В этом периоде нет расходов"

	return (
		<div>
			<Card className='costs'>
				<CostsFilter year={selectedYear} onYearChange={yearChangeHandler} />

				<CostsDataForDiagram filtredCosts={filtredCosts} />

				<CostsList costs={filtredCosts} />
			</Card>
		</div>
	);
};

export default Costs;
