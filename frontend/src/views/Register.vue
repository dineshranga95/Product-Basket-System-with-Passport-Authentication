<template>
  <div class="container py-4 mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">User Login Form</div>
          <div class="card-body">
            <form @submit.prevent="register">
                <div class="form-group mb-3">
                  <label for="exampleInputName">Name</label>
                  <input type="text" class="form-control" id="exampleInputName" v-model="form.name" aria-describedby="emailHelp" placeholder="Enter Name">
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" v-model="form.email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>                
            </form>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name:"Register",
    data(){
      return{
        form:{
          name:null,
          email:null,
          password:null
        }
      }
    },
    methods:{
      register(){
        return this.$store.dispatch('register', this.form).then(response=>{
          //eslint-disable-next-line no-undef
          toastr.success(response.msg)
        }).catch(error=>{
          for (const [k, v] of Object.entries(error.response.data.data)){
          //eslint-disable-next-line no-undef
          toastr.error(v)
          console.warn(k)
          
          }
        })
      }
    }
}
</script>