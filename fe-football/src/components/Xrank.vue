<template>
    <div class="ranking-view">
    <div class="match-table">
        <div class="match-table-title">中超 - 积分榜</div>
        <div class="match-table-list">
            <h4>常规赛</h4>
            <table class="cell_data">
                <tbody>
                    <tr>
                        <th></th>
                        <th class="team">球队</th>
                        <th>场</th>
                        <th>胜</th>
                        <th>平</th>
                        <th>负</th>
                        <th>进/失</th>
                        <th>积分</th>
                    </tr>
                    <tr v-for="(item,index) in content.data" :key=index>
                        <td :class="item.rank<=content.top?'top':''">{{item.rank}}</td>
                        <td class="team"><img :src="item.team_logo">{{item.team_name}}
                        </td>
                        <td>{{item.matches_total}}</td>
                        <td>{{item.matches_won}}</td>
                        <td>{{item.matches_draw}}</td>
                        <td>{{item.matches_lost}}</td>
                        <td>{{item.goals_pro}}/{{item.goals_against}}</td>
                        <td>{{item.points}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="match-table-list">

        </div>
    </div>
</div>
</template>
<script>
export default {
    props:["content"]
    ,
    mounted(){
        console.log(this._props.content)
        
    }
}
</script>

<style scoped>
.ranking-view .match-table,
.ranking-view .schedule-table {
    background: #e2e2e2
}

.ranking-view .match-table-title {
    position: relative;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAYAAABQ3RJZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QUNFQzFFQkVCQUIxMUUzQUYzNEFDMTRGOEI4QTBDNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QUNFQzFFQ0VCQUIxMUUzQUYzNEFDMTRGOEI4QTBDNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBQ0VDMUU5RUJBQjExRTNBRjM0QUMxNEY4QjhBMEM2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBQ0VDMUVBRUJBQjExRTNBRjM0QUMxNEY4QjhBMEM2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6EVP5wAABIZJREFUeNrsWM1rHGUY/72zs7O7Sdo0brS4McYSLNa0CsbmIhVRD7l58OIfoBY8CR48CYLgxYNnwYPQCmILXqzEQ/USSrHRKG2j2JhoyPd+f2T2a3Zef+/MpNlNdjdNNk1HcODhfd+ZZ575zfM+n6+QX+E8gHdIx0mfkj4jZXBIl3hj7+9oZhnvc3xGgd4o43wyj5fg80sL6ojB5CwBGCnElpYxAulv0HrNhgwq0BYgbSCXQQQVrkMdyX2Y1EeylQWQlBrSpOSBgHYE1tyFlM5n7q73cR0lvW3V8CqV0eOBdUQHNGT0AC5x/g2p0CnoLV240/0ah0hv4Fw4iHcjBgb0OpmbV6mM0/ECpgejuNWRTTf//N4FXboObS2L0VoNR7DBG9mdFDIxtLaOwU59Rj9IB0nkEIl1E5LyiSYmRpOxMyl0Oc/0g9b0fu1DELCFtgZWrUB0qmntvsSkNualaYTsS9D3O04/aAAsIwIcepooUBlagWle+g20QecctyVep0V1ed7gGBcnyxy+5E9NEbjtG9DlKsYJ7hNDx7CQjQ7KqcVaaEga+IDLm76x6b/WMMZkdFKrICDy0OpJy8OQBYzNLuJZX5lHvoRuWaI9FLy4vs167RKMZMKpYfwTPWy3zrFbxXYWcNKq7AygDxS02Gea+U/G6f9B+zEj6nWVtxqrfgWtUuwJ0iizVi+zl8YOxFZjMIB13p8mzfsKdK6IEyEdnzNjndOoWy3g2ZQ7ymIF37JLeYvz+MwiZKzPBza9msFp9nUvCGoWJZLZQAHLxNhKEi8q3g8vH14PvxvoKAELp11Sxze5RrIzCC0s4AlVzrCw8QfoigVNWgTT2uVkuUwTO2SXbAv6XroMKTvvRA48TjPVam0AO81qA3u7VktAsN6obeMXbXUiG2vpXUGvpJFkTWu2el6qoji9iNnN9Z1V/GPVWhtLvIDUUnbrcJM+E2eEyrfiT5pIzKxiYU8hb+I3zGRzmDjbj6ciQfegjMqVSmPZIszpJfx84SfceO81l//ydUxaRfxwJopTPUGEGdsl1SjUOyxDi5NzuHF7FXNverr97ldcW0/g++f68XRYh1HXAEgl/9o8rl753ckFjbtfvAAznEZEbULZQmlyHh+98jw+5h11DKuAjgw9hFODx9DrlJPS3eaby1jLlvAnb92WF7nl+l3+M7FePDkcRbTGrVXxXb1zJ44ENa1OlmbJX/H4j3B9crgfI48edfpEbH5jagHLlRpmuJzz+sXmoKvc2pU8vn58CBd5R3i/LXNpIJHiZyiMGVHSjsXAMVRCBs3LIF+k3gph51IQiTT0gHB51Tv93bC6lcyQQ1vHDPSJdBJaOsvs6zm04qf8qq5TfpichsOvTDlBuiVKBB3yQKtP8peK/P+CiGyzd9mkUG/nEc34RZszkd3lB+gvf3P8Qqf3BurF6sI5tura4U7NPma3OU1qB+5e+bfJJ9C+so3H9PQGMseBRxqEFlVo8GdZmi/C1q/8gqvjA3i5L+I6mp+vtInsxB/4UW3KKOksyfeg4R4aT/0rwACe1s6Uatnp8wAAAABJRU5ErkJggg==) 15px no-repeat #fff;
    background-size: 22px 19px;
    padding: 8px 0;
    padding-left: 45px;
    font-size: .9375rem
}

.ranking-view .match-table h4 {
    font-size: .75em;
    font-weight: 400;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #ddd
}

.ranking-view .match-table h4:nth-child(odd) {
    background: #fff
}

.ranking-view .cell_data {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-top: 1px solid #ddd
}

.ranking-view .cell_data td,
.ranking-view .cell_data th {
    height: 30px;
    font-size: .75rem;
    line-height: 30px;
    text-align: center;
    font-weight: 400;
    padding: 3px 5px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ddd
}

.ranking-view .cell_data .team {
    text-align: left;
    width: 30%;
    white-space: nowrap
}

.ranking-view .cell_data .top {
    color: #ff9000
}

.ranking-view .cell_data td img {
    vertical-align: middle;
    height: 20px;
    display: inline-block;
    width: auto
}

.ranking-view .cell_data td.name_l {
    text-align: left;
    padding-left: 10px
}

.ranking-view .cell_data td.name_r {
    text-align: right;
    padding-right: 10px
}

.nav-wrapper {
    position: fixed;
    z-index: 30;
    width: 100%
}

.content-wrapper {
    position: relative
}

.ranking-view {
    padding-top: 2.2rem
}

.ranking-view.baidu {
    padding-top: 2.1rem
}

.ranking-nav.baidu {
    top: 0
}
</style>

