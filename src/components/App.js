import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import UserList from './userList/UserList';

import useUsers from '../hooks/useUsers';

const searchFilter = [
	{
		title: 'Name',
		value: 'name',
	},
	{
		title: 'Username',
		value: 'username',
	},
];

const App = () => {
	const [selected, setSelected] = useState(searchFilter[0]);
	const [users, search] = useUsers(`${selected.value}`);
	const [selectedUser, setSelectedUser] = useState(null);

	return (
		<React.Fragment>
			<div className='ui grid' style={{ margin: '7% 0 0 15%' }}>
				<div className='ui row'>
					<div className='two wide column' style={{ padding: '0' }}>
						<SearchBar onFormSubmit={search} filter={selected} />
					</div>
					<div className='one wide column' style={{ padding: '0' }}>
						<Filter options={searchFilter} selected={selected} onSelectedChange={setSelected} onFormSubmit={search} />
					</div>
				</div>
			</div>
			<div className='ui grid' style={{ padding: '0', marginTop: '0' }}>
				<div className='ui row' style={{ padding: '0', marginLeft: '15%' }}>
					<div className='twenty wide column' style={{ width: '26%' }}>
						<UserList users={users} onUserSelect={setSelectedUser} />
					</div>
					{console.log(selectedUser)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
