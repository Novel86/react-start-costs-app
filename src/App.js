// import React from 'react'; // сейчас это необязательно. современные настройки позволяет обходиться без этого импорта.
import { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

//+ создание компонента App
//!+ компоненты - это функции, которые возвращают html
//!+ из компонента можно возвратить только один корневой элемент, div например..
//++ можно писать либо стрелочные либо обычный синтаксис функции
//+ каждый компонент должен находиться в отдельном файле
//++ в конце концов все компоненты возвращаются из App (древовидная структура)
//+ компоненты называются с большой буквы

// const App = () =>{} - это тоже можно (стрелочная функция)
const INITIAL_COSTS = [
	{
		date: new Date(2021, 3, 4),
		description: 'Холодильник',
		amount: 999,
		id: 'c1',
	},
	{
		date: new Date(2022, 8, 20),
		description: 'Кросовки',
		amount: 2500,
		id: 'c2',
	},
	{
		date: new Date(2023, 5, 9),
		description: 'Наушники TWS',
		amount: 1300,
		id: 'c3',
	},
];

function App() {
	// так как реакт не обновляет интерфейс при каждом изменении переменной, то для перерендеринга списка расходов нужно задать начальное состояние этого списка и затем уже следить за его изменениями - тут и нужно использовать useState

	const [costs, setCosts] = useState(INITIAL_COSTS);

	// через props пробросим эту функцию ниже в CostForm. Тем самым мы из CostForm поднимем (передадим выше) полученный объект с данными из формы. В качестве параметра будет объект с данными

	const addNewCostHandler = (newCostObject) =>
		//+ если мы хотим обновить состояние, которое зависит от каким-то образом предыдущего состояния, то есть спец форма обновляющей функции для этого: в setCosts передаем аргумент - функцию:
		setCosts((prevviousState) => [...prevviousState, newCostObject]);

	return (
		//+ тут используется синтаксис jsx (javascript XML)
		// это все работает благодаря инструменту create react app. после npm start код jsx преобразуется в обычный js
		// если между тэгами кастомного компонента ничего нет, то можно вставить компонент след образом: <CustomComponent />
		<div>
			<h1>Привет React!</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
				assumenda quo laudantium nam dicta voluptates ab deleniti, impedit
				doloribus iusto. Recusandae voluptates quis tempore quidem numquam dicta
				repellendus voluptas hic!
			</p>
			<NewCost onGetNewCostObject={addNewCostHandler} />
			{/* так как тут в пропсах  мы используем значение переменной состояния (costs), то этот компонент будет заново рендериться */}
			<Costs costs={costs} />
		</div>
	);

	//+ устаревший подход. требует импорта React из './react'

	// return React.createElement(
	// 	'div',
	// 	{},
	// 	React.createElement('h1', {}, 'Привет React!'),
	// 	React.createElement(
	// 		'p',
	// 		{},
	// 		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus	assumenda quo laudantium nam dicta voluptates ab deleniti, impedit doloribus iusto. Recusandae voluptates quis tempore quidem numquam dicta repellendus voluptas hic!'
	// 	),
	// 	React.createElement(Costs, { costsData: costs })
	// );
}

export default App;
