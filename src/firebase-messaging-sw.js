import { getMessaging, getToken } from 'firebase/messaging';

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, {
	vapidKey: 'BGbg4JO9g6cuz-h7WYhIduveZuXRHX9HSXvu0gylq-FEhNTkt58kVYhp6skOd1ZbfmPTRddiZHK0m9FtZ4JS0wo',
})
	.then((currentToken) => {
		if (currentToken) {
			console.log('HERE');
			// Send the token to your server and update the UI if necessary
			// ...
		} else {
			// Show permission request UI
			console.log('No registration token available. Request permission to generate one.');
			// ...
		}
	})
	.catch((err) => {
		console.log('An error occurred while retrieving token. ', err);
		// ...
	});
