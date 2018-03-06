// client_id: 661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com

import SocialAuth from "./socialAuth";
const socialAuth = new SocialAuth();

export default function InitGoogle () {
    window.onLoadGoogleInit = function() {
        console.log('this is called')
        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: '661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com',
                scope: 'profile email'
            }).then(function(GoogleAuth) {
                socialAuth.registerProvider("Google", {
                    signIn: GoogleAuth.signIn,
                    signOut: GoogleAuth.signOut
                })
            })                        
        })
    }
}



