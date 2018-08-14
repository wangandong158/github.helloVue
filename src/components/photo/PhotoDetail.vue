<template>
  <div class="tmpl">
    <nav-bar title="图片详情"></nav-bar>
    <span class="newTitle" v-text="title"></span>
    <div>
      <span>发起日期：{{time|convertData}}</span>
      <span class="count">{{count}}次浏览</span>
      <span>分类：民生经济</span>
    </div>
    <div class="photo">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li v-for="(image,index) in images" :key="index"
            class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <img v-preview="$GLOBAL.maxImage+image"
               :src="$GLOBAL.maxImage+image"
               :alt="image"
               preview-title-enable="true"
               preview-nav-enable="true">
        </li>
      </ul>
    </div>
    <textarea></textarea>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" pulling-text="下拉即可刷新..." loosing-text="释放即可刷新..." loading-text="加载中...">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        loading-text="加载中...">
        <div v-for="item in list" :key="item">{{item}}</div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        animation: 300,
        head_height: 50,

        title: "现代简约 明亮大富大贵俊峰离开大家赶快来发动机盖",
        time: 23435435436,
        count: 10,
        images: ['5b60943bda135f0cad9fc21d', '5b31883df025a41584da50d0', '5b2cc100da135f052b77608b', '5b29b5dfda135f2e88b69c72', '5b237dc6f025a433e67f5e9a'],

        list: [],
        refreshing: false,
        loading: false,
        finished: false
      }
    },
    created() {
      console.log("=====" + this.$route.params.id);
    },

    mounted(){
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            const text = this.list.length + 1;
            this.list.push(text < 10 ? '0' + text : text);
          }
          this.loading = false;

          if (this.list.length >= 150) {
            this.finished = true;
          }
        }, 500);
      },

      onRefresh() {
        setTimeout(() => {
          this.list = [];
          this.finished = false;
          this.refreshing = false;
          window.scrollTo(0, 10);
        }, 1000);
      }
    }
  }
</script>

<style scoped>
  .newTitle {
    color: #02C1ED;
  }

  .count {
    margin-left: 10px;
  }

  .photo img {
    width: 100%;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
    margin: 0;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
  }

  .mui-col-xs-4 {
    width: 50%;
  }

</style>
