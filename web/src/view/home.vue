<template>
  <div class="home">
      <div>
        <ul>
         
        </ul>
      </div>
  </div>
</template>
<script>
import {getArticleList} from '@/request/api'
export default { 
  data() {
    return {
        list:[1,2,3,4]
    
    };
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList(){
      getArticleList().then(res=>{
        
      })
    }
  }, 
};
</script>
<style scoped>
.home {
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
p {  
  width: 100%;
  line-height: 2rem;
}
</style>
