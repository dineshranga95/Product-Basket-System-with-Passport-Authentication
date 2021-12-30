<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 mt-5">
                <h2>Edit Product</h2>
                <form @submit.prevent="EditForm">
                
                    <div class="row mb-3 mt-3  justify-content-center">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-8">
                        <input v-validate="'required'" class="form-control" v-model="product.name" name="name" type="text" placeholder="name">                       
                        <div v-show="errors.has('name')" class="help-block alert alert-danger mb-0">{{errors.first('name')}}</div>
                        </div> 
                        
                        
                 </div>
                    <div class="row mb-3 justify-content-center">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Quantity</label>
                        <div class="col-sm-8">
                        <input v-validate="'required'" class="form-control" v-model="product.quantity" name="quantity" type="text" placeholder="quantity">                       
                        <div v-show="errors.has('quantity')" class="help-block alert alert-danger mb-0">{{errors.first('quantity')}}</div>                     
                        </div>
                    </div>
                    <div class="row mb-3 justify-content-center">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-8">
                        <input v-validate="'required'" class="form-control" v-model="product.price" name="price" type="text" placeholder="price">                       
                        <div v-show="errors.has('price')" class="help-block alert alert-danger mb-0">{{errors.first('price')}}</div>                     
                        </div>
                    </div> 
                    <div class="row mb-3 justify-content-center">
                        <label for="" class="col-sm-2"></label>
                        <div class="col-sm-8">
                        <button type="submit" class="btn btn-primary ml-5" >Edit Item</button>
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
            product:[]
        }
    },
    mounted(){
       
         return this.$store.dispatch('GetItem', this.$route.params.id).then(response=>{            
          this.product=response.item;
        })
    },
    methods:{
        EditForm(){
        return this.$store.dispatch('EditItem', this.product).then(response=>{   
        //eslint-disable-next-line no-undef
          toastr.success(response.msg);         
            this.$router.push('/list')
        })
            
        }
    }
}
</script>