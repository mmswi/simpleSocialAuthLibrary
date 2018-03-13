import {socialAuth} from "./socialAuth";

const initFacebook = () => {
    // loading the fb script in the dom
    (function (d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        console.log("fb script loaded")
    }(document, 'script', 'facebook-jssdk'));


    // 1. Initializing the facebook sdk
    window.fbAsyncInit = function () {
        console.log("initializing")
        const fbInitPromise = new Promise((resolve, reject) => {
            resolve(FB.init({
                appId: '207644233078321',
                cookie: true,
                xfbml: true,
                version: 'v2.7'
            }))
        })
        fbInitPromise.then(function fbInitSuccess() {
            FB.AppEvents.logPageView();
            console.log("we got fb loading yeii")
            var FacebookProvider = {
                // 2. signIn method that will be called with socialAuth.signIn('Google')
                signIn: function () {
                    // 4. signIn method returns a promise wich will be resolved when the Google SignIn is a success
                    return new Promise((resolve, reject) => {
                        FB.login(function(fbResponse) {                            
                            if (fbResponse.status === 'connected') {
                                resolve(fbResponse)
                            } else {
                                // The person is not logged into this app or we are unable to tell.
                                reject(fbResponse)
                            }
                        }, {
                            scope: 'public_profile,email'
                        })
                    })
                },
                signOut: function() {
                    return new Promise((resolve, reject) => {
                        FB.logout(function(fbResponse) {
                            resolve(fbResponse)
                        })
                    })
                }
            }
            socialAuth.registerProvider("Facebook", FacebookProvider);
        }, function fbInitError() {
            console.log("we got fb error in init")
        })

    };
}

export {initFacebook}