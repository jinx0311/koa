<template>
     <div class="layout">
         <div class="top">
        <img src="../assets/logo.png" alt="">
         <van-button>写文章</van-button>
      </div>
      <router-view></router-view>
      <div class="bot">
         <p>我用双手成就你的梦想</p>
      </div>
     </div>
</template>
<style scoped lang="less">
.top{ 
  text-align: left;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  img{
    width:80px;
  }
}
.layout{
  display: flex;
  flex-direction: column;
     background: url('../assets/webbg.jpg');
  background-size: 100%;  
}
.bot{
  flex: 1;
  color: #fff;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    box-sizing: border-box;
    padding: 20px 0;}
    .van-button{
          padding: 0 5px;
    font-size: 14px;
    background: #000;
    color: #fff;
    }
</style>