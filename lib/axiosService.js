import axios from 'axios'

class Service {
  constructor() {
    const service = axios.create({
      headers: {}
    })

    this.service = service
  }
  setHeader(name,value){
    this.service.defaults.headers.common[name] = value
  }
  removeHeader(name){
    delete this.service.defaults.headers.common[name]
  }
  handleSuccess(res){
    return res
  }
  handleErr(err){
    switch (err.response.status) {
      case 401:
        
        break;
    
      default:
       return Promise.reject(err)
    }
  }
  get(endpoint){
    return this.service.get(endpoint)
  }
  post(endpoint,payload){
    return this.service.request({
      method: 'POST',
      url: endpoint,
      responseType: 'json',
      data: payload
    })
  }
  put(endpoint,payload){
    return this.service.request({
      method:'PUT',
      url: endpoint,
      responseType:'json',
      data:payload
    })
  }
  delete(endpoint,payload){
    return this.service.request({
      method:'DELETE',
      url:endpoint,
      responseType:'json',
      data:payload
    })
  }
}

export default new Service()