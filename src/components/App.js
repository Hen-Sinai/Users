import React, { useState } from 'react';

import SearchBar from './SearchBar';
import Filter from './Filter';
import UserList from './user/UserList';
import UserDetails from './user/UserDetails';

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
			<div className='searchBar ui grid' style={{ margin: '7% 0 0 25%' }}>
				<div className='ui row'>
					<div className='two wide column' style={{ padding: '0' }}>
						<SearchBar onFormSubmit={search} filter={selected} />
					</div>
					<div className='one wide column' style={{ padding: '0' }}>
						<Filter options={searchFilter} selected={selected} onSelectedChange={setSelected} onFormSubmit={search} />
					</div>
				</div>
			</div>
			<div className='userList ui grid' style={{ padding: '0', margin: '0' }}>
				<div className='ui row' style={{ padding: '0', marginLeft: '24.5%' }}>
					<div className='twenty wide column' style={{ width: '27%' }}>
						<UserList users={users} onUserSelect={setSelectedUser} filter={selected.value} />
					</div>
					<div className='twenty wide column' style={{ width: '27%' }}>
						<UserDetails user={selectedUser} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
