<template>
  <div id="app">
    <!-- vant有多种引入方式这里采用的是完整引入,比较方便 -->
     <router-view></router-view>
     <!-- <van-button type="primary">主要按钮</van-button> -->

     <div class="text"></div>

  </div>
</template>

<style lang="less" scoped>
// // 需求
// // 自己的设计稿的参照尺寸 750
// // div满屏宽度->750px
//   .text{
//     width: 700px;
//     height: 200px;
//     background-color: yellow;
//   }
</style>
