// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
// 	apiKey: 'AIzaSyA1GNxBU0SnupYmC1mg4kH_AIDWNQWZp5g',
// 	authDomain: 'jeontongjujum-4d228.firebaseapp.com',
// 	projectId: 'jeontongjujum-4d228',
// 	storageBucket: 'jeontongjujum-4d228.appspot.com',
// 	messagingSenderId: '499842917350',
// 	appId: '1:499842917350:web:d66d354c45d33bd19eac27',
// 	measurementId: 'G-141N6H4QJC',
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = getMessaging(firebaseApp);
import('https://www.gstatic.com/firebasejs/<v9+>/firebase-app-compat.js');
import('https://www.gstatic.com/firebasejs/<v9+>/firebase-messaging-compat.js');

import('https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js');
import('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js');

// Firebase 구성

const firebaseConfig = {
	apiKey: 'AIzaSyA1GNxBU0SnupYmC1mg4kH_AIDWNQWZp5g',
	authDomain: 'jeontongjujum-4d228.firebaseapp.com',
	projectId: 'jeontongjujum-4d228',
	storageBucket: 'jeontongjujum-4d228.appspot.com',
	messagingSenderId: '499842917350',
	appId: '1:499842917350:web:d66d354c45d33bd19eac27',
	measurementId: 'G-141N6H4QJC',
};

firebase.initializeApp(firebaseConfig);

// Firebase 초기화
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Firebase Messaging 인스턴스 생성
const messaging = firebase.messaging();

// 백그라운드 메시지 수신 이벤트 리스너
messaging.onBackgroundMessage((payload) => {
	console.log('백그라운드에서 메시지 수신:', payload);
});

// 백그라운드 메시지 수신 이벤트 리스너
messaging.onBackgroundMessage((payload) => {
	console.log('백그라운드에서 메시지 수신:', payload);
});
