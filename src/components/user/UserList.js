import React from 'react';

import User from './User';

const UserList = ({ users, onUserSelect, filter }) => {
	if (users) {
		const renderedList = users.map((user, index) => {
			return <User key={index} user={user} onUserSelect={onUserSelect} filter={filter} />;
		});
		return <div className='ui animated middle aligned list'>{renderedList}</div>;
	}
	return <div></div>;
};

export default UserList;
