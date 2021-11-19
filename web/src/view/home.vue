<template>
  <div class="home">
      <div @click="onClick">
        <ul>
          <li v-for="(item,index) in list" :key="item" :index="index">
            {{item}}
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import chil from '@/components/HelloWorld.vue'
export default { 
  data() {
    return {
        list:[1,2,3,4]
    
    };
  },
  methods:{
    onClick(e){
      console.log(e.target.getAttribute('index'));
    }
  },
  components:{chil}
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
