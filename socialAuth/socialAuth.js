// socialProviders - object holding the handlers for each provider
// each property will be "ProviderName": {signIn: signInHandler, signOut: signOutHandler}
const socialProviders = {}

const socialAuth = {
    signIn: (providerName) => {
        return socialProviders[providerName].signIn()
    },
    signOut: (providerName) => {
        return socialProviders[providerName].signOut()
    },
    registerProvider: (providerName, handlerObject) => {
        // registerProvider - needs to be called when initiating the provider 
        for(let provider in socialProviders) {
            if (provider === providerName) {
                throw new Error("The provider is already registered")
            }
        }
        socialProviders[providerName] = handlerObject
    }
}

export { socialAuth };