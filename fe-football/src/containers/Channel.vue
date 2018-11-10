<template>
  
  <Xlist/>
</template>

<script>
import Xlist from '../components/Xlist.vue'
export default {
  components: {
    Xlist
  },
  mounted(){
    var path = this.$root._route.path

  }
}
</script>

<style>

</style>