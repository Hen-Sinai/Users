import React from 'react';

const userDetail = (user) => {
	const showData = () => {
		if (user) {
			return (
				<div>
					{console.log(user)}
					<span className='name'> {`Name: ${user.name}`} </span>
					<span className='user-name'> {`UserName: ${user.username}`} </span>
					<span className='phone'> {`Phone: ${user.phone}`} </span>
					<span className='website'> {`Website: ${user.website}`} </span>

					{/* <div class='accordion ui'>
						<div class='active title'>
							<i aria-hidden='true' class='dropdown icon' />
							{'Address:'}
							<div class='content active'>
								<span className='city'> {`City: ${user.address.city}`} </span>
								<span className='street'> {`Street: ${user.address.street}`} </span>
								<span className='zip-code'> {`ZipCode: ${user.address.zipcode}`} </span>
							</div>
						</div>
					</div> */}
				</div>
			);
		} else {
			return <h1> Choose User Please </h1>;
		}
	};

	return <div>{showData()}</div>;
};

export default userDetail;
