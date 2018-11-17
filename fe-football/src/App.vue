<template>
<div>
  <router-view></router-view>


</div>
  
</template>

<script>
import index from "./containers/index.vue";
import detail from "./containers/detail.vue";

export default {
  name: "app",
  components: {
    index,
    detail
  }
};
</script>

<style>
</style>
