
// api.key: AIzaSyC6It65wMIXGx2I1odwPnLaegFlUJf163w
// clientID: 145327975234-j7f0tna4hr0h33b6anbmtkk8r1raikpg.apps.googleusercontent.com (https://console.cloud.google.com/apis/credentials?authuser=2&project=green-reporter-407523)

// Initialize Google Sign-In, Function to initialize Google Sign-In
function initializeGoogleSignIn() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: '145327975234-j7f0tna4hr0h33b6anbmtkk8r1raikpg.apps.googleusercontent.com',
        }).then(
            onGoogleSignInInitSuccess,
            onGoogleSignInInitError
        );
    });
}

// Callback function for successful Google Sign-Up
function onGoogleSignUpSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Google Sign-Up successful:');
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    // You can perform additional actions here, like sending the user's information to your server
}

// Function to start Google Sign-Up
function startGoogleSignUp() {
    gapi.auth2.getAuthInstance().signIn().then(
        onGoogleSignUpSuccess,
        onGoogleSignUpInitError
    );
}

// Callback function when Google Sign-In initialization is successful
function onGoogleSignInSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Google Sign-In successful:');
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    // You can perform additional actions here, like sending the user's information to your server
}


// Callback function when Google Sign-In initialization encounters an error
function onGoogleSignInInitError(error) {
    console.error('Error initializing Google Sign-In:', error);
}

// Function to start Google Sign-In
function startGoogleSignIn() {
    gapi.auth2.getAuthInstance().signIn().then(
        onGoogleSignInSuccess,
        onGoogleSignInError
    );
}


// Callback function when Google Sign-In encounters an error
function onGoogleSignInError(error) {
    console.error('Error signing in with Google:', error);
}

// Call the initialization function when the page is loaded
document.addEventListener('DOMContentLoaded', initializeGoogleSignIn);

// Callback function when sign-in is successful
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Unique ID for the user
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    // You can perform additional actions here, like sending the user's information to your server
}

// Call the initialization function when the page is loaded
document.addEventListener('DOMContentLoaded', initGoogleSignIn);