import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCRkeNW85bJyh8_IPFmFJTktFYsM3GDHss',
	authDomain: 'project-tart.firebaseapp.com',
	projectId: 'project-tart',
	storageBucket: 'project-tart.appspot.com',
	messagingSenderId: '591938142490',
	appId: '1:591938142490:web:212bd04e66443d058b2ca3',
	measurementId: 'G-9HJ5092TG3',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
