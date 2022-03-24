<template>
  <div class="home"> 
      <div class="cont">
        <ul>
          <li v-for="item in list" :key="item.id">
            <div class="title">
              <p class="title_l">{{item.title}}</p>
              <p class="title_r">{{item.user_name}}</p>
            </div>
            <div class="title">
              <p class="text">{{item.content}}</p>
              <p class="time">{{item.ctime| flamate}}</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import {getArticleList} from '@/request/api'
export default { 
  data() {
    return {
        list:[]
    
    };
  },
  filters:{
    flamate(te){ 
      console.log(te);
      const time = new Date(te)  

      let year = time.getFullYear() 
      let Month = time.getMonth()+1
      let day = time.getDate()
      return (`${year}-${Month}-${day}`)
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList(){
      getArticleList().then(res=>{
          if(res.code==0){
            this.list=res.data
          }
      })
    }
  }, 
};
</script>
<style scoped lang="less">
.home {  
  text-align: center;
  min-height: 100vh;
  justify-content: center;
}
.cont{
  background: rgba(0, 0, 0, 0.6);
  width: 90vw;
  margin: 0 auto;
  color:#fff;
  padding: 10px;
  text-align: left;
  p{
    color: #fff;
  }
}

p {  
  width: 100%;
  line-height: 2rem;
}
*{
  margin:0;
  padding:0;
}

.title{
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: space-between;  
  width: 100%;
  .time,.title_l,.title_r,.text{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
}
.title_l{
  width: 80%;
  
}
.title_r{
  width: 20%;
  text-align: right;
}
.time{
      font-size: .3rem;
    text-align: right;
    width: 70%;
    margin-top: -8px;
    overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
