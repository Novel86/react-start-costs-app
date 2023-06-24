import './DiagramBar.css';

const DiagramBar = (props) => {
	let barFillHeigth;

	props.maxValue > 0
		? (barFillHeigth = `${Math.round((props.value / props.maxValue) * 100)}%`)
		: (barFillHeigth = '0%');

	return (
		<div className='diagram-bar'>
			<div className='diagram-bar__inner'>
				<div
					className='diagram-bar__fill'
					style={{
						height: barFillHeigth,
					}}></div>
			</div>
			<div className='diagram-bar__label'>{props.label}</div>
		</div>
	);
};

export default DiagramBar;
