<template>
    <div data-v-4a1f674c="" data-v-0192b9ca="" class="ranking-nav">
        <a data-v-4a1f674c="" href="rankingTeam" class="active">
            <span data-v-4a1f674c="">积分榜</span>
        </a>
        <a data-v-4a1f674c="" href="rankingGoal" class="">
            <span data-v-4a1f674c="">射手榜</span>
        </a>
        <a data-v-4a1f674c="" href="rankingAssist" class="">
            <span data-v-4a1f674c="">助攻榜</span>
        </a>
        <a data-v-4a1f674c="" href="rankingSchedule" class="">
            <span data-v-4a1f674c="">赛程榜</span>
        </a>
    </div>
</template>
<script>
export default {};
</script>
<style>
.ranking-nav[data-v-4a1f674c] {
  position: fixed;
  display: table;
  display: box;
  display: -ms-flexbox;
  display: flex;
  z-index: 30;
  top: 4.5rem;
  width: 100%;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  background-color: #000;
}
.ranking-nav a[data-v-4a1f674c] {
  position: relative;
  width: 0;
  display: table-cell;
  -box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.9375rem;
  color: #414141;
  text-align: center;
}
.ranking-nav .active span[data-v-4a1f674c] {
  border-bottom: 2px solid #ffab5d;
  padding-bottom: 4px;
  color: #fff;
}
</style>


