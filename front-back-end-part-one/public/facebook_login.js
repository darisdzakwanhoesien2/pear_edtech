// Function to initiate Facebook login
function facebookLogin() {
    FB.login(function(response) {
        statusChangeCallback(response);
    }, {scope: 'email'});
}

// Initialize the Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_APP_ID', // Replace with your Facebook App ID
        cookie     : true,
        xfbml      : true,
        version    : 'v14.0'
    });
        
    // Check login status
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Handle the login status change
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        // The user is logged in and has authenticated your app
        console.log('Logged in with Facebook');
        getUserInfo();
    } else {
        // The user is not logged in to Facebook or has not authenticated your app
        console.log('Not logged in with Facebook');
    }
}

// Get user information after login
function getUserInfo() {
    FB.api('/me', {fields: 'name,email'}, function(response) {
        console.log('Facebook User Info:', response);
        // You can perform additional actions here, like sending the user's information to your server
    });
}
