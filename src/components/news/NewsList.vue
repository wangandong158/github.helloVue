<template>
  <div class="tmpl">

    <nav-bar title="新闻列表"></nav-bar>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(news,index) in newsList" :key="index">
        <router-link :to="{name:'news.detail',query:{content:news.content}}">
          <img class="mui-media-object mui-pull-left" :src="$GLOBAL.maxImage+news.cover[0]">
          <div class="mui-media-body">
            {{news.title}}
            <div class="itemTime">
              <p class='mui-ellipsis'>{{news.commentCount}}</p>
              <p class='mui-ellipsis'>{{news.publishTime|convertData}}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'NewsList',
        newsList: []
      }
    },

    created() {
      this.$ajax.post('/tools/news/news/more', {
        columnId: "new_10000001",
        publishTime: 0,
        pageSize: 20,
        operation: 2,
        tag: 1
      })
        .then(res => {
          this.newsList = res.data.data;
        }).catch(err => {

      })
    },
  }
</script>

<style scoped>
  .itemTime p:nth-child(1) {
    float: left;
  }

  .itemTime p:nth-child(2) {
    float: right;
  }
</style>
