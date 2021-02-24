import React, { useState, useEffect, useRef } from 'react';

const Filter = ({ options, selected, onSelectedChange, onFormSubmit }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		onFormSubmit();
	}, [selected]);

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current && ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div key={option.value} className='item' onClick={() => onSelectedChange(option)}>
				<span> {option.title} </span>
			</div>
		);
	});

	return (
		<div ref={ref} className='ui form'>
			<div className='field'>
				<div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
					<i className='dropdown icon'></i>
					<div className='text'>{`Filter by: ${selected.title}`}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
