import axios from "axios";
import qs from "querystring";

const errorhandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("客户端的语法错误");
            break;
        default:
            console.log(info);
            break;
    }
}

const instance = axios.create({
    timeout: 5000

});
//instance'{:pppp}.defaults.baseURL = 'https://api.example.com';
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//请求拦截
//post参数处理
instance.interceptors.request.use(
    config => {
        if (config === "post") {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => Promise.reject(error)
)

//响应拦截
instance.interceptors.response.use(
    response => response.status == 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        const {
            response
        } = error;
        if (response) {
            errorhandle(response.status, response.data)
            return Promise.reject(response)
        } else {
            console.log("请求被中断了了");
        }
    }
)

export default instance;