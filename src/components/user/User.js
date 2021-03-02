import React from 'react';

const style = {
	marginTop: '6%',
	borderBottom: '2px solid #80808014',
	cursor: 'pointer',
};

const User = ({ user, onUserSelect, filter = 'name' }) => {
	const filterBy = () => {
		if (filter === 'name') {
			return <div className='user-details header'> {user.name}</div>;
		} else if (filter === 'username') {
			return <div className='user-details header'> {user.username}</div>;
		}
	};

	return (
		<div role='listitem' className='user-tab item' style={style} onClick={() => onUserSelect(user)}>
			<div className='content'>{filterBy()}</div>
		</div>
	);
};

export default User;
