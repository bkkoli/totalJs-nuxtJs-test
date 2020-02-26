<template>
  <main>
    <headerTest/>
    <nuxt />
    <footerTest/>
  </main>
</template>

<script>

import footerTest from '@/components/ui/footer/footer-test.vue'
import headerTest from '@/components/ui/header/header-test.vue'

export default {
  computed: {
   
  },
  async mounted() {
    
  },
  components: {
    footerTest,
    headerTest
  }
}
</script>

<style scoped lang="less">

</style>
