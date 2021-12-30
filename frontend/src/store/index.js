import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({ 
  state: {
    token: null || localStorage.getItem('accessToken')
  },
  getters:{
    loggedIn(state){
      return state.token != null
    }
  },
  mutations: {
    setToken( state, token){
        state.token= token
    },
    removeToken(state){
      state.token = null
    }
  },
  actions: {
    login(context, credential){
      return new Promise ((resolve, reject)=>{
        axios.post('http://127.0.0.1:8000/api/auth/login', credential)
          .then(response=>{
            localStorage.setItem('accessToken',response.data.user.access_token)          
            context.commit('setToken', response.data.user.access_token)
            resolve(response.data)
          }).catch(error=>{
            reject(error)
        })
      })
    }    ,
    LogOut(context){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      return new Promise ((resolve, reject)=>{
        axios.post('http://127.0.0.1:8000/api/auth/logout')
          .then(response=>{   
            localStorage.removeItem('accessToken')                   
            context.commit('removeToken')
            resolve(response.data)
          }).catch(error=>{
            reject(error)
        })
      })
    },
    register(context, form){
      
      return new Promise ((resolve, reject)=>{
        axios.post('http://127.0.0.1:8000/api/auth/register', form)
          .then(response=>{   
            console.warn(response)
            resolve(response.data)
          }).catch(error=>{
            reject(error)
        })
      })    
  },
  Addproduct(context,form){
    
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    return new Promise ((resolve)=> {
        axios.post('http://127.0.0.1:8000/api/auth/addItems', form)
          .then(response => {           
            resolve(response.data)
          })
      })
  },
  productlist(context){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    return new Promise ((resolve)=> {
        axios.get('http://127.0.0.1:8000/api/auth/getItems')
          .then(response => {                 
            resolve(response.data)
          })
      })
  },
  DeleteItem(context,id){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    return new Promise ((resolve)=> {
        axios.delete('http://127.0.0.1:8000/api/auth/deleteItems/'+id)
          .then(response => {                  
            resolve(response.data)
          })
      })
  },
  GetItem(context,id){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    return new Promise ((resolve)=> {
        axios.get('http://127.0.0.1:8000/api/auth/getItems/'+ id)
          .then(response => {                  
            resolve(response.data)
          })
      })
  },
  EditItem(context,product){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    return new Promise ((resolve)=> {
        axios.put('http://127.0.0.1:8000/api/auth/updateItems/'+product.id, product)
          .then(response => {                  
            resolve(response.data)
          })
      })
  }
},
  modules: {
  } 
})
