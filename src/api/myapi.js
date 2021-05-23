import  axios  from "axios"

export function testMyApi(parameter) {
    return axios({
        url: 'http://123.207.32.32:8000/home/multidata',
        method: 'get',
        params: parameter
    })
}
