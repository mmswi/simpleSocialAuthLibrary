// client_id: 661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com

import { socialAuth } from "./socialAuth";

const initGoogle = () => {
    console.log("defining onloadgoogleinit")
    window.onLoadGoogleInit = function onLoadGoogleInit() {
        const date = new Date()
        const n = date.getTime();
        console.log("onloadinit is called at", n)
        gapi.load('auth2', function () {
            const GoogleProvider = {
                signIn: async function() {
                    gapi.auth2.init({
                        client_id: '661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com'
                    });
                    const GoogleAuth = await gapi.auth2.getAuthInstance();
                    return GoogleAuth.signIn({scope: 'profile email'});
                },
                signOut: async function () {
                    gapi.auth2.init({
                        client_id: '661095788569-9js6e04li2f52vd8vsdtm9nier4sd8qp.apps.googleusercontent.com'
                    });
                    const GoogleAuth = await gapi.auth2.getAuthInstance();
                    return GoogleAuth.signOut();
                }
            };

            socialAuth.registerProvider("Google", GoogleProvider)
        })
    }
}

export { initGoogle }


