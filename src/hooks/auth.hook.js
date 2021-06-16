import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [userAccess, setUserAccess] = useState(null);
	const [ready, setReady] = useState(false);

	const login = useCallback((getToken, id, access) => {
		setToken(getToken);
		setUserId(id);
		setUserAccess(access);

		localStorage.setItem(
			storageName,
			JSON.stringify({
				userId: id,
				token: getToken,
				userAccess: access,
			}),
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		setUserAccess(null);

		localStorage.removeItem(storageName);
	}, []);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName));

		if (data && data.token) {
			login(data.token, data.userId, data.userAccess);
		}
		setReady(true);
	}, [login]);

	return { login, logout, token, userId, userAccess, ready };
};
