//!+ из компонента можно возвратить только один корневой элемент, div например..

//+ подключение стилей

import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
// import React, { useState } from 'react';

// можно стрелку, можно обычную функцию
const CostItem = (props) => {
	//THIS useState - один из хуков. все хуки начинаются с use. выполняются в корне компонента (функции). в useState передается то, за состоянием чего мы будем следить (за состоянием конкретного экземпляра компонента). Этот хук возврящает массив из двух элементов: первый - это текущее значение состояния переменной, второй - это функция для обновления этого состояния. с помощью этой функции мы можем присвоить новое значение для переменной.

	// let buttonValue = 'Изменить';

	// const [value, setValue] = useState(buttonValue);

	// const setButtonValueHandler = () => {
	// 	value === 'Изменить'
	// 		? setValue('Не менять') // при запуске этой функции происходит присвоение нового значения переменной и запуск функции-компонента (парсинг этого компонента)
	// 		: setValue('Изменить');
	// };

	return (
		<li>
			<Card className='cost-item'>
				<CostDate date={props.date} />

				<div className='cost-item__description'>
					<h2>{props.description}</h2>
					<div className='cost-item__price'>₽{props.amount}</div>
				</div>
				{/* то что ниже - это было для понимания useState */}
				{/* <button onClick={setButtonValueHandler}>{value}</button> */}
			</Card>
		</li>
	);
};

export default CostItem;
