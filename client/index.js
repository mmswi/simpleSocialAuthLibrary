/* 
    ./client/index.js
*/
import InitGoogle from '../socialAuth/googleAuth';
import SocialAuth from '../socialAuth/socialAuth';

InitGoogle();
const socialAuth = new SocialAuth();

// TODO - 
socialAuth.signIn("Google").then(function(userProfile) {
    console.log(userProfile)
});
