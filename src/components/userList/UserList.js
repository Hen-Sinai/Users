import React from 'react';

import User from './User';

const UserList = ({ users, onUserSelect }) => {
	if (users) {
		const renderedList = users.map((user, index) => {
			// return <User key={index} name={user} onUserSelect={onUserSelect} />;
			return <User key={index} name={user} onUserSelect={onUserSelect} />;
		});
		return <div className='ui animated middle aligned list'>{renderedList}</div>;
	}
	return <div></div>;
};

export default UserList;
