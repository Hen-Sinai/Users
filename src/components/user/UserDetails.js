import React, { useState } from 'react';

const style = {
	display: 'block',
	margin: '6% 0 0 3%',
};

const UserDetail = ({ user }) => {
	const [open, setOpen] = useState(false);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const crateLine = (parameter, info) => {
		return (
			<div className={parameter} style={style}>
				<span style={{ fontWeight: 'bold' }}> {`${capitalizeFirstLetter(parameter)}: `} </span>
				<span> {info} </span>
			</div>
		);
	};

	const showAddress = () => {
		if (open) {
			return (
				<React.Fragment>
					<div className='content active'>
						{crateLine('city', user.name)}
						{crateLine('street', user.name)}
						{crateLine('zipcode', user.name)}
					</div>
				</React.Fragment>
			);
		} else return;
	};

	const showData = () => {
		if (user) {
			return (
				<div>
					{crateLine('name', user.name)}
					{crateLine('username', user.username)}
					{crateLine('phone', user.phone)}
					{crateLine('email', user.email)}
					{crateLine('website', user.website)}
					<div className='accordion ui'>
						<div className={`ui ${open ? 'visible active' : ''} title`} style={style} onClick={() => setOpen(!open)}>
							<i aria-hidden='true' className='dropdown icon' />
							<span style={{ fontWeight: 'bold' }}> {'Address:'} </span>
							{showAddress()}
						</div>
					</div>
				</div>
			);
		} else {
			return <h1 style={{ justifyContent: 'center' }}> Choose User Please </h1>;
		}
	};

	return <div>{showData()}</div>;
};

export default UserDetail;
