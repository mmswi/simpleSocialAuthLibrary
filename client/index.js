/* 
    ./client/index.js
*/
import { initGoogle } from '../socialAuth/googleAuth';
import { socialAuth } from '../socialAuth/socialAuth';

initGoogle();
console.log(socialAuth);

// Async signin / signout
const asyncSignIn = async () => {
    const userProfile = await socialAuth.signIn("Google");
    console.log("we got here, fam!!!", userProfile);
}


setTimeout(asyncSignIn, 1000)
