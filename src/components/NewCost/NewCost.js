import CostForm from './CostForm/CostForm';
import './NewCost.css';

const NewCost = (props) => {
	// через props пробросим эту функцию ниже в CostForm. Тем самым мы из CostForm поднимем (передадим выше) полученный объект с данными из формы. В качестве параметра будет объект с данными

	const saveNewCostObjectHandler = (newCostObject) => {
		const newCostData = {
			...newCostObject,
			id: Math.random().toString().slice(2),
		};

		// запускаем функцию, которую передали из родительского компонента App через пропс, аргументом передаем сформированный объект
		props.onGetNewCostObject(newCostData);
		console.log(newCostData);
	};

	return (
		<div className='new-cost'>
			<CostForm onGetNewCostObject={saveNewCostObjectHandler} />
		</div>
	);
};

export default NewCost;
