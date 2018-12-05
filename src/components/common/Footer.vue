<template>
  <div class="common_header">
    {{footerMsg}}
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  data () {
    return {
      footerMsg: 'this is a common footer'
    }
  }
}
</script>
<style scoped>
.common_header {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #333;
  color: #fff;
  text-align: center;
}
</style>
