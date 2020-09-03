import axios from 'axios'
import {API_URL} from '../../Constants'
class HelloWorldService{
    executeHelloWorldService(){
        return axios.get(`${API_URL}/hello-world`)
    }
    executeHelloWorldBeanService(){
        return axios.get(`${API_URL}/hello-world-bean`)
    }
    executeHelloWorldPathService(name){
        //let username='user'
        //let password='password'
        //let basicAuthHeader='Basic ' + window.btoa(`${username}:${password}`);
        return axios.get(`${API_URL}/hello-world-pathvariable/${name}`,
        //{
          //  headers:{
            //    authentication : basicAuthHeader
            //}
        //}
        )
    }


}
export default new HelloWorldService()