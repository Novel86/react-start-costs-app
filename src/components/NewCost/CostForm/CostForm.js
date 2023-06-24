import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
	//+ мой вариант (написал с ходу)

	// let newCostDescription = '';
	// let newCostSum = '';
	// let newCostDate = '';

	// let newCostObject = {
	// 	description: newCostDescription,
	// 	amount: newCostSum,
	// 	date: newCostDate,
	// };

	// const getNewCostDescription = (event) => {
	// 	newCostDescription = event.target.value;
	// 	newCostObject = { ...newCostObject, description: newCostDescription };
	// 	console.log(newCostObject);
	// };
	// const getNewCostSum = (event) => {
	// 	newCostSum = event.target.value;
	// 	newCostObject = { ...newCostObject, sum: newCostSum };
	// 	console.log(newCostObject);
	// };
	// const getNewCostDate = (event) => {
	// 	newCostDate = new Date(event.target.value);
	// 	newCostObject = { ...newCostObject, date: newCostDate };
	// 	console.log(newCostObject);
	// };

	//+ вариант с несколькими состояниями

	const [inputNewCostDescription, setInputNewCostDescription] = useState('');
	const [inputNewCostAmount, setInputNewCostAmount] = useState('');
	const [inputNewCostDate, setInputNewCostDate] = useState('');

	//+ обработчики событий именуются в конце ..Handler

	const getNewCostDescriptionHandler = (event) => {
		setInputNewCostDescription(event.target.value);
	};

	const getNewCostSumHandler = (event) => {
		setInputNewCostAmount(+event.target.value);
	};

	const getNewCostDateHandler = (event) => {
		setInputNewCostDate(event.target.value);
	};

	// вариант с одним состоянием

	// const [newCostData, setNewCostData] = useState({
	// 	description: '',
	// 	amount: '',
	// 	date: '',
	// });

	// const getNewCostDescriptionHandler = (event) => {
	// 	//!+ так мы бы записали по-умолчанию. Технически это работает, но есть правило --->

	// 	// setNewCostData({
	// 	// 	...newCostData,
	// 	// 	description: event.target.value,
	// 	// });

	// 	//!+ если нам нужно обновить состояние и мы каким либо образом зависим от предыдущего состояния, то обновляющая функция записывается так: 1) в качестве аргумента передаем cb. 2) cb принимает предыдущее состояние в качестве своего аргумента. 3) работаем уже с этим аргументом

	// 	setNewCostData((previousState) => {
	// 		return {
	// 			...previousState,
	// 			description: event.target.value,
	// 		};
	// 	});

	// 	console.log(newCostData);
	// };

	// const getNewCostSumHandler = (event) => {
	// 	setNewCostData((previousState) => {
	// 		return {
	// 			...previousState,
	// 			amount: event.target.value,
	// 		};
	// 	});

	// 	console.log(newCostData);
	// };

	// const getNewCostDateHandler = (event) => {
	// 	setNewCostData((previousState) => {
	// 		return {
	// 			...previousState,
	// 			date: event.target.value,
	// 		};
	// 	});

	// 	console.log(newCostData);
	// };

	// отправка формы
	//+ обработчики событий именуются в конце ..Handler

	//+ добавление двухстороннего связывания (two way binding): для того чтобы очистить инпуты после отправки формы вызовим функции, обновляющие состояния, а для инпутов укажем атрибут value со значением этих функций

	const nullInputs = () => {
		setInputNewCostDescription('');
		setInputNewCostAmount('');
		setInputNewCostDate('');
	};

	const getNewCostHandler = (event) => {
		event.preventDefault();

		const newCostObject = {
			description: inputNewCostDescription,
			amount: inputNewCostAmount,
			date: new Date(inputNewCostDate),
		};

		// запускаем функцию, которую передали из родительского компонента NewCost через пропс, аргументом передаем сформированный объект
		props.onGetNewCostObject(newCostObject);

		//+ добавление двухстороннего связывания (two way binding): для того чтобы очистить инпуты после отправки формы вызовим функции, обновляющие состояния, а для инпутов укажем атрибут value со значением этих функций

		nullInputs();
	};

	// отображаем форму по клику на кнопке Добавить новый расход
	let boo = false;

	const [isForm, setIsForm] = useState(boo);

	const displayFormHandler = () => {
		isForm ? setIsForm(false) : setIsForm(true);

		nullInputs();
	};

	if (!isForm) {
		return (
			<button type='button' onClick={displayFormHandler}>
				Добавить новый расход
			</button>
		);
	}

	return (
		<form action='#' onSubmit={getNewCostHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label htmlFor='new-cost-description'>Название</label>
					<input
						type='text'
						name='new-cost-description'
						id='new-cost-description'
						onChange={getNewCostDescriptionHandler}
						value={inputNewCostDescription}
						required
					/>
				</div>
				<div className='new-cost__control'>
					<label htmlFor='new-cost-sum'>Сумма</label>
					<input
						type='number'
						name='new-cost-sum'
						id='new-cost-sum'
						min='1'
						onChange={getNewCostSumHandler}
						value={inputNewCostAmount}
						required
					/>
				</div>
				<div className='new-cost__control'>
					<label htmlFor='new-cost-date'>Дата</label>
					<input
						type='date'
						name='new-cost-date'
						id='new-cost-date'
						onChange={getNewCostDateHandler}
						value={inputNewCostDate}
						required
					/>
				</div>
			</div>
			<div className='new-cost__actions'>
				<button type='submit'>Добавить расход</button>
				<button type='button' onClick={displayFormHandler}>
					Отмена
				</button>
			</div>
		</form>
	);
};

export default CostForm;
