<template>
  <input
    class="input"
    :class="{error:!isOk}"
    :type="type"
    :placeholder="placeholder"
    @input="dataChange"
    @blur="showTips"
  />
</template>

<script>
export default {
  data() {
    return {
      isOk: true
    };
  },
  props: ["type", "placeholder", "rule", "err_message"],
  methods: {
    showTips() {
      if (!this.isOk) {
        this.$toast.fail(this.err_message);
      }
    },
    dataChange($event) {
      console.log("数据有变化");
      if (!$event.target.value) {
        //检查输入框是否有值，否则将ISOK赋值为TURE以输出错误提示
        this.isOk = true;
      } else {
        //根据接收到的正则表达式，来测试输入框的内容是否符合要求
        var regex = new RegExp(this.rule);

        this.isOk = regex.test($event.target.value);
      }

      // if (!this.isOk) {
      //   this.$toast.fail(this.err_message);
      // }

      //向父组件传回
      this.$emit("input", $event.target.value);
    }
  }
};
</script>

<style lang="less" scoped>
  .input {
    margin-bottom: 5.556vw;
    width: 100%;
    height: 10.556vw;
    padding: 5.556vw;
    box-sizing: border-box;
    background: #fff;
    border: none;
    border-bottom: 1px #666 solid;
    outline: none;
  }
  .error{
    border-color: red
  }
</style>