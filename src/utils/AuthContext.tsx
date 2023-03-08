import React, { useEffect } from 'react';

import { auth } from 'Config/firebase';
import { userData } from 'Constants/types';
import { onAuthStateChanged, User } from 'firebase/auth';
import { toast } from 'react-toastify';

import { avenueApi } from './api';

interface FireBaseUser extends User {
	accessToken?: string;
}

interface AuthContextProps {
	user: FireBaseUser | undefined | null;
	userData: userData;
	setUserData: React.Dispatch<React.SetStateAction<userData>>;
	accessToken: string;
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [userData, setUserData] = React.useState({});
	const [user, setUser] = React.useState<FireBaseUser | null>();
	const [message, setMessage] = React.useState(true);
	const [accessToken, setAccessToken] = React.useState('');

	useEffect(() => {
		const _cancelSubscription = onAuthStateChanged(auth, (user) => {
			setUser(user);
			(async () => {
				try {
					const accessToken = await auth.currentUser?.getIdToken();
					setAccessToken(accessToken ?? '');

					const { data: currUser } = await avenueApi.get('/user', {
						params: { uid: user?.uid },
						headers: { Authorization: `Bearer ${accessToken}` },
					});

					if (currUser) {
						setUserData(currUser);
						if (message) {
							toast.success('Already Registered.');
							setMessage(false);
						}
					} else if (user) toast.info('You are not registered. Please register to continue.');
				} catch (error) {
					setUserData({});
					toast.error((error ?? 'Something went wrong!') as string);
				}
			})();
		});

		return _cancelSubscription;
	}, []);

	return <AuthContext.Provider value={{ user, userData, setUserData, accessToken }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
