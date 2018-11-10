<template>
    <div class="content-wrapper">
        <xheader/>
        <xchannel/>
    </div>
  
</template>

<script>
import xheader from '../components/Xheader.vue'
import xchannel from './Channel.vue'
export default {
  name: 'app',
  components: {
    xheader,
    xchannel
  }
}
</script>

<style>

</style>