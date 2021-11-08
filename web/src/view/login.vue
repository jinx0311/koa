<template>
    <div class="login">
       <div class="item">
           <span>QQ:</span>
            <input v-model="number" type="text">
       </div>
        <div class="item">
           <span>密码:</span>
            <input v-model="password" type="password">
       </div>
       <van-button @click="login">Login</van-button>
    </div>
</template>
<script>
import {login} from '@/request/api'
export default {
    data(){
        return{ 
            number:'',
            password:""

        }
    },
    methods:{
        login(){
            login({user_name:this.number,password:this.password}).then(res=>{

        })
        }
    },
    mounted(){
        
    }
}
</script>
<style scoped>
input{
    background: rgba(255,255,255,0.7);
    border: none;
    border-radius: 4px;
    padding-left: .5rem;
    height: 2rem;
}
.login{
    min-width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('../assets/kasha.jpg') no-repeat;
    background-size: 100% 100%;
    flex-direction: column;
}
.item{
    margin-bottom: 15px;
}
.item span{
    display: inline-block;
    width: 3rem;
    color: darkgoldenrod;
    text-align: right;
}
.van-button{
    background: darkgoldenrod;
    border:none;
    height: 2rem;
    border-radius: 5px;
    margin-top: 1rem;
    width: 7rem;
    color: #ddd;
    position: relative;
    left: 1rem;
}
</style>