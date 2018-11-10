<template>

    <div class="nav-wrapper" style="">
        <div class="header">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAkBAMAAAC08zNQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcf///////////////////////////////////////////////9z4L/oAAAAMdFJOUwB3RLsYYuOZM4jMqtatMpAAAAJoSURBVEjHrZY/b9NAFMDPiQOBZshRVSwZjAFRpAxFJwZQhrC0IDEEkJg6MDB6KFLHDpH5AmFn69oJ8QGSmCY0fR+K9873304gFW/wPd/d73zvz70zY4wJgY+vYsRkM2GeNPg9xl7xxPY0xYHRBwUDwLYPXSYbGnrHUeRqLIKZGSylA9OAboIj2EnNQUBzJT2YaXUTHdGEXSg4P4NnjEFVNtEdv3M9HdidP4FlOr4pXVob0GlVFB07XfuabtAb7UJORInTR8bbeTo0Po+crxSatj43+tzGCpL/RLcEyktYUPNiWzp9TaY9sCZKhpYckfZBiOeUgbuw1HnCM/iyNyxpeOi7t6TJnC5pPaDXw0rAPm9BDyr0UtFPHbuFypYkoNdmixjLw2gcJD8zDbwG8N5Llcc2144yvd51so4u/JOPs3SuZXY787/Q5nwbOoKVthuuZWwK3t2Cnmq7B06u5ftSK3NaHgCXztPNmYp66XNZ1o58hy9O2T/S0oqLIF4rS891pl5YOsYnaceSblTCnRj6ivP7VMJ4ZumGovswkX1wTsk0gKLMLVyzpNvOijNDt+BSam9lwYkoGo7XvhuafbT0xNB0IknrKHrm0ceWRvcruxPm0L+ldgs+1dB9Q8fO+TZ1je3gPNKacv56uj5id/GbpO3ArxvQ5K3b0u+XNbT1WlDXVJ6f4fgheq4Fi2FItwU4Xqs53xiH8beMdp3Rhnyacmek6Dt+bSnpHlxRQTkhE6GGXmy6gZE+wbEVbrqV1dE/0cS9GjqnyCW9H1SOTol4k4W3f5yqV6zgbe9ucyRVvxyx8y+Smt+QP9qO+wgB35ueAAAAAElFTkSuQmCC" class="nav-img">
            <div class="nav-bar">
                <a href="#/home" :class="{'link-active':channel==='home'}">首页</a>
                <a href="#/match" :class="{'link-active':channel==='match'}">比赛</a>
                <a href="#/stat" :class="{'link-active':channel==='stat'}" >数据</a>
            </div>
        </div>
        <div class="subnav-bar-wrapper">
            <div class="subnav-bar">
                <a  v-for="(el,index) in menu[item]" :key=index @click=setChannel(index,el) :class="{'sub-link-active':index===idx}">{{el.label}}</a>
            </div>
            <xstatheader v-if="channel==='stat'"/>
        </div>
    </div>

</template>

<script>
import axios from "axios";
import xstatheader from './Xstatheader.vue'
export default {
  components: {
    xstatheader
  },
  data() {
    return {
      channel: "home",
      menu: [],
      path: "home",
      item: "news",
      api:
        "https://api.dongqiudi.com/app/tabs/iphone/104.json",
      idx: 0
    };
  },
  mounted() {
    this.path = this.$route.path.split("/")[1];
    if (this.path !== "") {
      this.channel = this.path;
    } else {
      this.channel = "home";
    }

    var self = this;
    axios
      .get("http://localhost:3000/api/getIndex")
      .then(function(response) {
        self.menu = response.data.menus;
        if (self.channel === "stat") {
          self.item = "ranking_new";
          self.api = self.menu[self.item][self.idx].season.url;
        } else if (self.channel === "match") {
          self.item = "match_tab";
          self.api = self.menu[self.item][self.idx].api;
        } else {
          self.item = "news";
          self.api = self.menu[self.item][self.idx].api;
        }
        self.$store.state.api = self.api
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    setChannel(index, el) {
      var self = this;
      self.idx = index;
      if(self.channel==='stat'){
        
        if(el.season){
          self.api = el.season.url
        }else{
          console.log(el.sub_tabs[0].url)
          self.api = el.sub_tabs[0].url
        }
        
      }else{
        self.api = el.api;
      }
      self.$store.state.api = self.api

    }
  },
    watch: {
    $route(to) {
      this.idx = 0;
      var self = this;
      var path = to.path.split("/")[1];
      self.channel = path;
      if (self.channel === "stat") {
        self.item = "ranking_new";
        self.api = self.menu[self.item][self.idx].season.url;
      } else if (self.channel === "match") {
        self.item = "match_tab";
        self.api = self.menu[self.item][self.idx].api;
      } else {
        self.channel = "home";
        self.item = "news";
        self.api = self.menu[self.item][self.idx].api;
      }
      this.$store.state.api = this.api
      // console.log(this.$store.state.api)
    }
  }
};
</script>

<style>
.nav-wrapper {
  position: fixed;
  z-index: 30;
  width: 100%;
  top: 0;
}
.content-wrapper {
  position: relative;
  padding-top: 4.6rem;
}
.content-wrapper.baidu {
  padding-top: 0;
}
.header {
  height: 2.5rem;
  background-color: #16b13a;
  color: #fff;
  position: relative;
  display: box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.nav-bar {
  height: 100%;
  width: 70%;
  display: table;
  float: right;
}
.header a {
  font-size: 1rem;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  position: relative;
}
.header a,
a:hover,
a:visited {
  color: #9af3af;
}
.header a.link-active {
  color: #fff;
}
.header .link-active:after {
  position: absolute;
  content: "";
  left: 50%;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff;
  margin-left: -5px;
}
.nav-img {
  width: 3.83rem;
  position: absolute;
  left: 0.95rem;
  top: 50%;
  -ms-transform: translateY(-45%);
  transform: translateY(-45%);
  -webkit-transform: translateY(-45%);
}
.subnav-bar-wrapper {
  height: 2rem;
  color: #333;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
}
.subnav-bar {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: block;
  white-space: nowrap;
  text-align: center;
}
.subnav-bar a {
  margin: 0 0.8rem;
  font-size: 0.9rem;
  height: 1.9rem;
  line-height: 2rem;
  display: inline-block;
  text-align: center;
  position: relative;
  white-space: nowrap;
  border-bottom: 0.1rem solid transparent;
}

.subnav-bar a.sub-link-active {
  color: #16b13a;
  border-bottom-color: #16b13a;
}
.m-hao-foot {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
}
.m-hao-foot img {
  display: block;
  width: 100%;
}
.m-hao-foot .close {
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 1rem;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
</style>