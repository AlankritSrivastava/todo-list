import axios from 'axios'
import {API_URL} from '../../Constants'
export const USER_NAME_ATTRIBUTE='AuthenticatedUser'
class AuthenticationService {
    executeBasicAuthService(username,password)
    {
        return axios.get(`${API_URL}/basicauth`,{headers:{authorization:this.createBasicAuthToken(username,password)}})
    }
    createBasicAuthToken(username,password)
    {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    createJWTToken(token)
    {
        return 'Bearer ' +  token
    }

    executeJwtAuthService(username,password)
    {
        return axios.post(`${API_URL}/authenticate`,{
            username,
            password
        })
    }
    
    registerSuccessfullLogin(username,password)
    {
        sessionStorage.setItem(USER_NAME_ATTRIBUTE,username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccessfullLoginForJwt(username,token)
    {
        sessionStorage.setItem(USER_NAME_ATTRIBUTE,username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    
    logout(){
        sessionStorage.removeItem(USER_NAME_ATTRIBUTE)
    }
    
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_ATTRIBUTE)
        if(user===null) return false
        return true
    }
    
    getUsername() {
        let user = sessionStorage.getItem(USER_NAME_ATTRIBUTE)
        if(user===null) return ''
        return user
    }
    
    setupAxiosInterceptors(token) {
        // let username='user'
        // let password='password'
        // let basicAuthHeader= 'Basic ' +  window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}
export default new AuthenticationService()