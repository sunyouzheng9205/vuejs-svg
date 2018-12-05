<template>
  <div class="layout">
    <Header />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  name: 'layout',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
  .container {
    padding-bottom: 60px;
  }
</style>
