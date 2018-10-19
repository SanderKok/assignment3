<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="google-signin-client_id" content="299881498544-3i7sjekklfp42tvf5gm4metmqpv807om.apps.googleusercontent.com">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<link href="css/PHP_Assignment_3_Playlist_YouTube.css?v=0.13" rel="stylesheet" type="text/css" />
	<title>Assignment 3 PHP</title>
</head>
<body>
	<header class="header">
		<nav class="nav">
			<ul class="nav__list">
				<li class="list__item">Home</li>
				<li class="list__item" id="googleSignInButton">
					<div class="g-signin2 list__item" data-onsuccess="onSignIn"></div>
				</li>
				<button id="sign-in-or-out-button">Sign In</button>
				<li class="list__item"><button class="googleButton hidden" id="googleSignOutButton" onClick="signOut();">Sign out</button></li>
				<li class="list__item--right">
					<span class="welcomeLabel" id="userWelcomeMessage"></span>
				</li>
				<img id="userAvatar" class="avatar" />
			</ul>
		</nav>
	</header>
	<main class="main">
		<br />
		<h1 class="title">Assignment 3 | YouTube Playlist</h1>
		<hr class="hr" />
		<p id="notLoggedInMessage">To recieve your YouTube playlists. Login with the Google button in the nav.</p>
		<div id="youtubeList"></div>
		<br />
	</main>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="config.js?v=0.10"></script>
<script src="js/google.js?v=0.15"></script>
<script async defer src="https://apis.google.com/js/api.js" 
	onload="this.onload=function(){};handleClientLoad()" 
	onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>
</body>
</html>