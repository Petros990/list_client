import axios from 'axios'
export default {
  login:function (data){
    return new Promise((resolve,reject )=>{
      axios.post("http://127.0.0.1:8000/api/auth/login", data)
      .then(res =>{
        resolve(res.data)
      })
      .catch(err =>{
        reject(err.response.data)
      })
    })
  },
  register:function (){

  }

}
