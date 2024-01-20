import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
	apiKey: 'AIzaSyA1GNxBU0SnupYmC1mg4kH_AIDWNQWZp5g',
	authDomain: 'jeontongjujum-4d228.firebaseapp.com',
	projectId: 'jeontongjujum-4d228',
	storageBucket: 'jeontongjujum-4d228.appspot.com',
	messagingSenderId: '499842917350',
	appId: '1:499842917350:web:d66d354c45d33bd19eac27',
	measurementId: 'G-141N6H4QJC',
});

const messaging = getMessaging(firebaseApp);
console.log(messaging);
