import { auth } from 'Config/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from 'firebase/auth';
import { toast } from 'react-toastify';

export const googleSignIn = async (): Promise<UserCredential | void> => {
	try {
		await signInWithPopup(auth, new GoogleAuthProvider());
		toast.success('Login Successful');
	} catch (error) {
		toast.error((error ?? 'Login Error') as string);
	}
};

export const signout = async (): Promise<void> => {
	try {
		await signOut(auth);
		toast.success('Logout Successful');
	} catch (error) {
		toast.error((error ?? 'Logout Error') as string);
	}
};
