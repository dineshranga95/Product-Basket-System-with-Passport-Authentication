<template>
   

<div class="container mb-5">
    <div class="row justify-content-center">
        <div class="col-sm-10 mt-5">
            <h2 >Product Basket</h2>
    <div id="products" class="row view-group  mt-4 mb-5">
                <div class="item col-sm-6 col-lg-4 col-10 mb-4" v-for="item in list" :key="item.id">
                    <div class="thumbnail card">
                        <div class="img-event">
                            <img class="group list-group-image img-fluid" style="width:100%" v-bind:src="'http://127.0.0.1:8000/'+item.image" alt="" />
                        </div>
                        <div class="caption card-body">
                            <h4 class="group card-title inner list-group-item-heading">
                                Name - {{item.name}}</h4>
                            
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <p class="lead">
                                        Price - {{item.price}}
                                    </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="lead">
                                        Quantity - {{item.quantity}}
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                   
                                    <router-link class="btn btn-primary" :to="'edit/'+ item.id">Edit</router-link>
                                </div>
                                <div class="col-6">
                                    <a class="btn btn-warning" @click="DeleteItem(item.id)">Delete</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    }, 
    methods:{
        getItems(){
            return this.$store.dispatch('productlist').then(response=>{                
            this.list=response.itemlist;
          
            })
            
        },
        DeleteItem($id){
             return this.$store.dispatch('DeleteItem',$id).then(response=>{
          //eslint-disable-next-line no-undef
          toastr.success(response.msg);
          this.getItems();
          
            })
            
        }
    },
    
    mounted(){
        this.getItems();
    }

}
</script>