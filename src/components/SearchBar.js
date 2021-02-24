import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({ onFormSubmit, filter }) => {
	const [term, setTerm] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const isFirstRun = useRef(true);

	useEffect(() => {
		setTerm('');
	}, [filter]);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}

		onFormSubmit(debouncedTerm);
	}, [debouncedTerm]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 250);
		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='search-bar ui'>
			<form className='ui form' onSubmit={onSubmit}>
				<div className='field'>
					<input type='text' placeholder='Search...' value={term} onChange={(e) => setTerm(e.target.value)} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
