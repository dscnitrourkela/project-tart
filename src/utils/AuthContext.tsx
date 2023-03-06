import React, { useEffect } from 'react';

import { auth } from 'Config/firebase';
import { userData } from 'Constants/types';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AuthContextProps {
	user: User | undefined | null;
	userData: userData;
	setUserData: React.Dispatch<React.SetStateAction<userData>>;
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [userData, setUserData] = React.useState({});
	const [user, setUser] = React.useState<User | null>();

	useEffect(() => {
		const _cancelSubscription = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});

		return _cancelSubscription;
	}, []);

	return <AuthContext.Provider value={{ user, userData, setUserData }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
