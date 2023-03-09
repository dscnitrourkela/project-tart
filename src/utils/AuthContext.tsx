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
	loading: boolean;
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [userData, setUserData] = React.useState({});
	const [user, setUser] = React.useState<FireBaseUser | null>();
	const [accessToken, setAccessToken] = React.useState('');
	const [loading, setLoading] = React.useState(true);

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
						if (currUser.festID.includes('nitrutsav-2023') || currUser.rollNumber) {
							toast.success('Already Registered.');
						} else toast.error('Kindly do the payment');
					} else if (user) toast.info('You are not registered. Please register to continue.');

					setLoading(false);
				} catch (error) {
					setUserData({});
					toast.error((error ?? 'Something went wrong!') as string);
				}
			})();
		});

		return _cancelSubscription;
	}, []);

	return (
		<AuthContext.Provider value={{ user, userData, setUserData, accessToken, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
