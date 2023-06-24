import './CostsList.css';
import CostItem from '../CostItem';

const CostsList = (props) => {
	// можно так, а можно в тернарник в следующем ретерне

	if (props.costs.length === 0) {
		return <h2 className='cost-list__fallback'>В этом периоде нет расходов</h2>;
	}

	return (
		<ul className='cost-list'>
			{props.costs.map((item) => (
				<CostItem
					key={item.id}
					date={item.date}
					description={item.description}
					amount={item.amount}
				/>
			))}
		</ul>
	);
};

export default CostsList;
