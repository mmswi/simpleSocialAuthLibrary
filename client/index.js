/* 
    ./client/index.js
*/
import { initGoogle } from '../socialAuth/googleAuth';
import { initFacebook } from '../socialAuth/facebookAuth';
import { socialAuth } from '../socialAuth/socialAuth';

initGoogle();
initFacebook();
console.log(socialAuth);

// Async signin / signout
const asyncSignIn = async () => {
    // const userProfile = await socialAuth.signIn("Google");
    const userProfile = await socialAuth.signIn("Facebook");
    console.log("we got here, fam!!!", userProfile);
}
const asyncSignOut = async () => {
    // const userProfile = await socialAuth.signOut("Google");
    const userProfile = await socialAuth.signOut("Facebook");
    console.log("we left, fam!!!", userProfile);
}


setTimeout(asyncSignIn, 1000)
setTimeout(asyncSignOut, 3000)
