<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 mt-5">
                <h2>Add product</h2>
                <form @submit.prevent="SubmitForm">
                
                    <div class="row mb-3 mt-3  justify-content-center">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-8">
                        <input v-validate="'required'" class="form-control" v-model="form.name" name="name" type="text" placeholder="name">                       
                        <div v-show="errors.has('name')" class="help-block alert alert-danger mb-0">{{errors.first('name')}}</div>
                        </div> 
                        
                        
                 </div>
                    <div class="row mb-3 justify-content-center">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Quantity</label>
                        <div class="col-sm-8">
                        <input v-validate="'required'" class="form-control" v-model="form.quantity" name="quantity" type="text" placeholder="quantity">                       
                        <div v-show="errors.has('quantity')" class="help-block alert alert-danger mb-0">{{errors.first('quantity')}}</div>                     
                        </div>
                    </div>
                    <div class="row mb-3 justify-content-center">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-8">
                        <input v-validate="'required'" class="form-control" v-model="form.price" name="price" type="text" placeholder="price">                       
                        <div v-show="errors.has('price')" class="help-block alert alert-danger mb-0">{{errors.first('price')}}</div>                     
                        </div>
                    </div> 
                     <div class="row mb-3 justify-content-center">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-8">
                        <input v-validate="'mimes:image/jpeg,image/png'" class="form-control" name="image" @change="getImage($event)" type="file" placeholder="image">                       
                        <div v-show="errors.has('image')" class="help-block alert alert-danger mb-0">{{errors.first('image')}}</div>                     
                        </div>
                    </div>
                    <div class="row mb-3 justify-content-center">
                        <label for="" class="col-sm-2"></label>
                        <div class="col-sm-8">
                        <button type="submit" class="btn btn-primary ml-5" v-show="form.name && form.quantity && form.price">Add to the List</button>
                        </div>
                    </div> 
                   
                        
                        
                </form>
            </div>
            
    
        </div>
        
    </div>
</template>

<script>
export default {
   
  data(){
      return{
          form:{
              name: '',
              quantity: '',
              price: '',
              image:''
          }
      }
  }, 
  methods:{
      SubmitForm(){
          return this.$store.dispatch('Addproduct', this.form).then(response=>{
          //eslint-disable-next-line no-undef
          toastr.success(response.msg)
          console.warn(response);
          this.$router.push('/list');
        })
      },
         
      getImage(event){
          var filereader = new FileReader();
          filereader.readAsDataURL(event.target.files[0]);
          filereader.onload=(event)=>{
              this.form.image= event.target.result;
          }
          
      }
  }
}
</script>

<style>
div.help-block.alert{
   padding-top: 8px;
   padding-bottom: 8px;
}
</style>