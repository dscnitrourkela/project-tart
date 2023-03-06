import { auth } from 'Config/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from 'firebase/auth';

export const googleSignIn = async (): Promise<UserCredential | void> => {
	try {
		const userCred = signInWithPopup(auth, new GoogleAuthProvider());
		return userCred;
	} catch (error) {
		alert('Login Error');
	}
};

export const signout = async (): Promise<void> => {
	try {
		await signOut(auth);
		alert('Success');
	} catch (error) {
		alert('Login Error');
	}
};
