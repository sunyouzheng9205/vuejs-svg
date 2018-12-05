<template>
  <div class="common_header">
      {{headerMsg}}
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  data () {
    return {
      headerMsg: 'this is a common header'
    }
  }
}
</script>
<style scoped>
.common_header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #333;
  color: #fff;
  text-align: center;
}
</style>
