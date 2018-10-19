const GOOGLE_SIGN_OUT_BUTTON = document.getElementById("googleSignOutButton");
const GOOGLE_BUTTON = document.getElementById("googleSignInButton");

// function onSignIn(googleUser) {
// 	const USER_WELCOME_MESSAGE = document.getElementById("userWelcomeMessage");
// 	const USER_AVATAR = document.getElementById("userAvatar");
// 	const NOT_LOGGED_IN = document.getElementById("notLoggedInMessage");
// 	var profile = googleUser.getBasicProfile();
// 	console.log('ID: ' + profile.getId());
// 	console.log('Name: ' + profile.getName());
// 	console.log('Image URL: ' + profile.getImageUrl());
// 	console.log('Email: ' + profile.getEmail());
// 	USER_WELCOME_MESSAGE.innerHTML = profile.getName();
// 	USER_AVATAR.setAttribute("src", profile.getImageUrl());
// 	GOOGLE_SIGN_OUT_BUTTON.classList.remove("hidden");
// 	GOOGLE_BUTTON.classList.add("hidden");
// 	NOT_LOGGED_IN.innerHTML = "Logged in!";
// 	setInterval(function(){ NOT_LOGGED_IN.innerHTML = ""; }, 2000);
// 	youtube();
// }

// function signOut() {
// 	var auth2 = gapi.auth2.getAuthInstance();
// 	auth2.disconnect().then(function () {
// 		console.log('User signed out.');
// 		GOOGLE_SIGN_OUT_BUTTON.classList.add("hidden");
// 		GOOGLE_BUTTON.remove("hidden");
// 		window.location.reload();
// 	});
// }

// function youtube() {
// 	// YouTube playlist request
// 	const API_KEY = config.FIRST_KEY + config.SECRET_KEY + config.HIDDEN_KEY;
// 	const url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&key=" + API_KEY;
// 	fetch(url)
// 	.then(response => {
// 		return response.json();
// 	}).then(youtubeResponse => {
// 		console.log(youtubeResponse);
// 	}).catch(error => {
// 		console.log(error);
// 	});
// }

var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

	gapi.client.init({
		'apiKey': 'AIzaSyD-9vxKic4a3gs6bkQINbG98u8WCAtN_OE',
		'discoveryDocs': [discoveryUrl],
		'clientId': '299881498544-3i7sjekklfp42tvf5gm4metmqpv807om.apps.googleusercontent.com',
		'scope': SCOPE
	}).then(function () {
		GoogleAuth = gapi.auth2.getAuthInstance();
		GoogleAuth.isSignedIn.listen(updateSigninStatus);
		var user = GoogleAuth.currentUser.get();
		setSigninStatus();
		$('#sign-in-or-out-button').click(function() {
			handleAuthClick();
		}); 
	});
}

function handleAuthClick() {
	if (GoogleAuth.isSignedIn.get()) {
		// User is authorized and has clicked 'Sign out' button.
		GoogleAuth.signOut();
	} else {
		// User is not signed in. Start Google auth flow.
		GoogleAuth.signIn();
	}
}

function setSigninStatus(isSignedIn) {
var user = GoogleAuth.currentUser.get();
var isAuthorized = user.hasGrantedScopes(SCOPE);
	if (isAuthorized) {
		$('#sign-in-or-out-button').html('Sign out');
	} else {
		$('#sign-in-or-out-button').html('Sign In');
	}
}

function updateSigninStatus(isSignedIn) {
	setSigninStatus();
}