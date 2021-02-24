import React from 'react';

const style = {
	marginTop: '4%',
	borderBottom: '2px solid #80808014',
	cursor: 'pointer',
};

const User = ({ name, onUserSelect }) => {
	return (
		<div role='listitem' className='user-tab item' style={style} onClick={() => onUserSelect(name)}>
			<div className='content'>
				<div className='user-details header'> {name}</div>
			</div>
		</div>
	);
};

export default User;
