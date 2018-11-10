<template>
  <div>
    <div class="list-container">
      <ul class="news-list">
  
        <li v-if="label==='热门'||label==='懂球号'" v-for="(item,index) in articles1" :key="index" class="news-list-item">
          <a href="javascript:;">
            <div class="news-list-img-side">
              <img :src="item.thumb" lazy="loaded">
            </div>
            <div class="news-list-info">
              <h3>{{item.title}}</h3>
              <p>{{item.description}}</p>
              <div class="news-list-tag">
                <span class="news-list-comment">{{item.comments_total}}评论</span>
                <span class="news-list-tags-collection">
                              <span v-if="item.channel === 'feed'"  class="news-list-tag-item news-list-tag-hao">懂球号</span>
                <span v-if="item.label === '深度'||item.label === '闲情'" class="news-list-tag-item news-list-tag-common" style="color: rgb(71, 130, 196); border-color: rgb(71, 130, 196);">{{item.label}}</span>
  
                </span>
              </div>
            </div>
          </a>
        </li>
        <li v-if="label!=='热门'||label!=='比赛'" v-for="(item,index) in articles1" :key="'a'+index" class="news-list-item">
          <a href="javascript:;">
            <div class="news-list-img-side">
              <img :src="item.thumb" lazy="loaded">
            </div>
            <div class="news-list-info">
              <h3>{{item.title}}</h3>
              <p>{{item.description}}</p>
              <div class="news-list-tag">
                <span class="news-list-comment">{{item.comments_total}}评论</span>
                <span class="news-list-tags-collection">
                              <span v-if="item.channel === 'feed'"  class="news-list-tag-item news-list-tag-hao">懂球号</span>
                <span v-if="item.label === '深度'||item.label === '闲情'" class="news-list-tag-item news-list-tag-common" style="color: rgb(71, 130, 196); border-color: rgb(71, 130, 196);">{{item.label}}</span>
  
                </span>
              </div>
            </div>
          </a>
        </li>
        <li v-if="label==='比赛'" v-for="(item,index) in main.list" :key="'m'+index" class="match-calendar-item">
          <h3 v-if="item.date_utc!==''" class="match-title">{{item.date_utc}} </h3>
          <a href="/matchDetail/50952939/situation" class="match-list-item">
            <div class="match-item-a"><img :src="item.team_A_logo">
              <p>{{item.team_A_name}}</p>
            </div>
            <div class="match-item-c">
              <p>{{item.time_utc}} {{item.match_title}}
  
              </p>
              <p class="spec">{{item.fs_A}} - {{item.fs_B}}</p>
              <img v-if="item.videoFlag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAoBAMAAAClR805AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcQCzMQCzLwCyMQSyMACzMQCzMAWwMQCxLwiyMwiyNACyMQCyLxaxOQCzMRaxOp6G9rMAAAAOdFJOUwCAQL8n5pgPYK9wz07xtx2fbQAAAmpJREFUSMftl89rE0EUx7/ZpN0UZM1UbRAlrKOIpxKdFg+FJRXxIpaGpUUQQoONB4XSQymiKJEi6MVD1UvBHMQiXkQo6EVELx48C+Jt82OjpGHxP9A3s0lJrNgkZUEwb3fezkzgs7PfeW8mg8iTn4HY1xQuPEcgduMz1hCQvcCXoNC38CMo9N4++j9BR0y/+I1T/lOL46pfm5e9j3pDhxy/kGeMXaISA8KvkPPfVSIX/dYJek/GU+a+3442NoQrMmKCGqO2eLchxByidW6ujNsiuTN6wGvY9B/QJopIQHOgzzCWyDKWx5DnOYc4P+7sjDaaaAeD7egUwlPql0oSQ5ucjz7lHLidB/Y1390pWi+0oY/WZUOOGtBzDdmAl4tAQo2kC/RNr4EuCxGqrJdpeFGlNVXeCiUPmc15qltBKplWtDebkuHAq3yBy9q4EBZNI/SC58W6FUR97pYgFVk7wliZWYwNAxNNrWHEuhakHe346EKWHay2oE2FPsNr3NwdGpPfyR2Ik7OaYXQncZIyqNRJyvwNfd9V3Rl/z7un/GXLTsrOYk/TuIUe4Q7OwhjOStUZZY2UhgSpkSDdoJ3zv6FHIPMwLVlq4hpjpWaJruIuUgYPJZpWI4mm6kVxNw/0hm5J9I+ThH5NcZ0MTc+HJTGSywvNlmFhxOc6RG9fngZrj91PdX5CRoee2F9IU8pct8YgsLz5DJiaOU3oa/VeFtUBdy0Vod430JiVhr5eXcTCKgiNc7PAg1WMofQh38tWoMnE1vgxUkEcpsUIK8ASPa7Ir1A3CN7f0fvofwod4F/3AA8cAR6Tgjvc/QIJZyVcRvsrLwAAAABJRU5ErkJggg=="
                class="icon-highlights">
              <p v-if="!item.videoFlag">已结束</p>
            </div>
            <div class="match-item-b"><img :src="item.team_B_logo">
              <p>{{item.team_B_name}}</p>
            </div>
          </a>
        </li>
      </ul>
      <xrank v-if="label==='数据'" :content="main" />
    </div>
    <div v-if="label!=='比赛'&&label!=='数据'" class="more-btn-wrapper" @click=moreNews>
      <div class="more-btn no-more-data" style="display:none;">
        <span>没有更多内容</span>
      </div>
      <div class="more-btn" style="display:block;">
          <img src="https://static1.dongqiudi.com/m/dist/img/m-load.5e3d98d.gif"><span>加载中...</span>
      </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
import xrank from "./Xrank.vue";
export default {
  name: "app",
  components: {
    xrank
  },
  data() {
    return {
      api: "",
      label: "",
      item: "news",
      content: {},
      articles1: [],
      articles2: [],
      main: [],
      nextApi: "",
      sub_tabs: 0
    };
  },
  mounted() {
    this.api = this.$store.state.api;
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      axios
        .get("http://localhost:3000/api/getData", {
          params: {
            api: self.$store.state.api
          }
        })
        .then(function(response) {
          
         
          self.content = response.data;
          if(self.label!==self.content.label){
            self.articles1 = []
          }
          self.label = "";
          if (self.content.label || self.content.code === 0) {
            self.label = self.content.label;
            if (self.label === "热门") {
              self.content.contents[0].articles.forEach(function(item) {
                self.articles1.push(item);
              });
              self.content.contents[1].articles.forEach(function(item) {
                self.articles1.push(item);

              });
            } else if (self.content.code === 0) {
              self.label = "懂球号";
              if(self.content.data.article_list){
                self.content.data.article_list.list.forEach(function(item) {
                  self.articles1.push(item);
                });
              }else{
                self.content.data.list.forEach(function(item) {
                  self.articles1.push(item);
                });
              }
              
            }else{
                self.content.articles.forEach(function(item){
                  self.articles1.push(item)
                })
                
            }
          } else if (self.content.list) {
            self.label = "比赛";

            var arr = [];
            self.content.list.forEach(function(item, index) {
              arr.push(item);
              item.time_utc = item.time_utc.substring(0, 5);

              if (index > 0 && index <= self.content.list.length - 1) {
                if (item.date_utc === arr[index - 1].date_utc) {
                  item.date_utc = "";
                }

              }
            });
            self.main = self.content;
          } else if (self.content.length) {
            self.label = "数据";
            self.getMore(self.content[0].sub_tabs[self.sub_tabs].url);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMore(api) {
      var self = this;
      axios
        .get("http://localhost:3000/api/getData", {
          params: {
            api: api
          }
        })
        .then(function(response) {


          if (response.data.content) {
            self.main = response.data.content.rounds[0].content;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    moreNews(){

      if(this.content.next){
        var api = this.content.next
      }else{
        var api = this.content.data.next
      }
      
      this.$store.state.api = api
    }
  },
  computed: {
    change() {
      return this.$store.state.api;
    }
  },
  watch: {
    $route(to) {
      this.getData();
      this.articles1 = []
    },
    change: function(to) {
      this.getData();
    }
  }
};
</script>

<style scoped>
.match-title {
  line-height: 1.7rem;
  font-size: 0.6rem;
  color: #333;
  background: #e8e8e8;
  text-align: center;
  height: 1.6rem;
}

.match-list-item {
  position: relative;
  display: block;
  width: auto;
  height: 5.9rem;
  padding: 0 1.9rem;
  border-bottom: 1px solid #e8e8e8;
  background: #f7f7f7;
}

.match-item-a,
.match-item-b {
  float: left;
  width: 4.7rem;
  padding-top: 1rem;
}

.match-item-a img,
.match-item-b img {
  display: block;
  width: 2.6rem;
  margin: 0 auto;
}

.match-item-a p,
.match-item-b p {
  line-height: 1;
  margin-top: 0.6rem;
  font-size: 0.6rem;
  color: #333;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.match-item-c {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0.8rem;
}

.match-item-c p {
  font-size: 0.6rem;
  line-height: 1rem;
  color: #999;
  text-align: center;
}

.match-item-c p:first-of-type {
  width: 10rem;
  line-height: 0.8rem;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.match-item-c p.spec {
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 0.6rem 0;
  color: #333;
}

.match-item-c p.match-channel {
  width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
}

.match-item-c p.spec-vs {
  font-size: 2rem;
  margin-top: 0.4rem;
}

.match-item-c p.spec-playing {
  color: #00b332;
}

.icon-highlights {
  display: block;
  width: 5.8rem;
  margin: 0 auto;
  margin-top: -0.3rem;
}

.match-item-b {
  float: right;
}

.icon-live {
  display: inline-block;
  height: auto;
  width: 1.5rem;
  margin-left: 0.11rem;
  vertical-align: top;
}
</style>