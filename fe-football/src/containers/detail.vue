<template>
    <div>
        <card :content="id"/>
    </div>
</template>
<script>
import card from "../components/Xcards.vue";

export default {
  components: {
    card
  },
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.id = this.$route.query.id;
  }
};
</script>

