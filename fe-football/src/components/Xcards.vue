<template>
    <div class="article-container">
        <div class="article-content">
              <article class="show-more" v-html="html">
            
            
              </article> 
        
        
        </div>
    </div>
    
        
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      html: ""
    };
  },
  mounted() {
    var self = this;
    this.id = this.$attrs.content;
    axios
      .get("http://localhost:3000/api/getDetail", {
        params: {
          id: self.id
        }
      })
      .then(function(res) {
        self.html = res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
<style scoped>
 p {
    font-size: 16px;
    line-height: 1.6;
    margin: 15px 0;
}
.article-container .show-more h4 {
    margin: 0;
    padding: 0;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    font-weight: 400;
}
</style>


