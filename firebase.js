import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBr6MejDn5UDr_aHY-hlT7PQMefXNLfO9g',
	authDomain: 'uber-eats-clone-rn-464da.firebaseapp.com',
	projectId: 'uber-eats-clone-rn-464da',
	storageBucket: 'uber-eats-clone-rn-464da.appspot.com',
	messagingSenderId: '980653978646',
	appId: '1:980653978646:web:2f9d865f48ec756d633137',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
