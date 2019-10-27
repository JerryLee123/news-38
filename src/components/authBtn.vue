<template>
  <div class="btn" @click="send">{{text}}</div>
</template>

<script>
export default {
  props:['text'],
  methods:{
    send(){
      this.$emit('send')
    }
  }
}
</script>

<style lang="less" scoped>
  .btn{
    height: 13.333vw;
    background: #cc3300;
    border-radius: 6.944vw;
    text-align: center;
    line-height: 13.333vw;
    color: #fff;
    font-weight: 600;
  }
</style>