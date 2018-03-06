// client_id: 661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com

import SocialAuth from "./socialAuth";
const socialAuth = new SocialAuth();

export default function InitGoogle () {
    window.onLoadGoogleInit = function() {
        console.log('this is called');
        gapi.load('auth2', function () {
            const GoogleProvider = {
                signIn: function() {
                    gapi.auth2.init({
                        client_id: '661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com',
                        scope: 'profile email'
                    });
                    const GoogleAuth = gapi.auth2.getAuthInstance();
                    return GoogleAuth.signIn();
                },
                signOut: function () {
                    gapi.auth2.init({
                        client_id: '661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com',
                        scope: 'profile email'
                    });
                    const GoogleAuth = gapi.auth2.getAuthInstance();
                    return GoogleAuth.signOut();
                }
            };

            socialAuth.registerProvider("Google", GoogleProvider)
        })
    }
}



