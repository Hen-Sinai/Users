import { useState } from 'react';
import usersApi from '../apis/users';

const useUsers = (searchProp) => {
	const [users, setUsers] = useState([]);

	const search = async (term) => {
		const { data } = await usersApi.get('/users', {
			params: {
				query: term,
			},
		});
		const indexOfProperty = Object.keys(data[0]).indexOf(searchProp);

		const filterResults = () => {
			const mappedUsers = data.map((user) => {
				if (term) {
					if (Object.values(user)[indexOfProperty].toLowerCase().includes(term)) {
						return Object.values(user)[indexOfProperty];
					}
				} else {
					return Object.values(user)[indexOfProperty];
				}
				return null;
			});
			return mappedUsers.filter((el) => el != null);
		};

		const filteredResults = filterResults();

		setUsers(filteredResults);
	};
	return [users, search];
};

export default useUsers;
