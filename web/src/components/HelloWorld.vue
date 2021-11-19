<template>
  <div class="input-container">
    <input v-bind="$attrs"> 
  </div>
</template>

<script>
export default {
  inheritAttrs:false, //禁止根元素默认继承父级参数
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  created(){
    console.log(this.$attrs)
  }
}
</script> 
<style scoped>
 
</style>
