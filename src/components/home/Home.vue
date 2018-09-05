<template>
  <div class="homeDiv">
    <swip :datas="datas"></swip>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news.list'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'photo.share'}">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'goods.list'}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news.list'}">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news.list'}">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">搜索资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news.list'}">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'home',
        datas: [],
      }
    },
    created() {
      console.log('===='+this.$store.state.count)
      this.$store.commit('increment')
      this.$ajax.post('/tools/news/news/carousel', {
        columnId: 'new_10000001'
      })
        .then(res => {
          this.datas = res.data.data;
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods: {
      javacalljs:function() {
        this.$router.push({name:'news.list'});
      },
      javacalljsparam:function(params) {
        alert(params);
        this.$router.push({name:'goods.list'});
      },
    },
  }
</script>

<style scoped>

  /*九宫格背景线*/
  .mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
    margin: 0;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
  }

  /*九宫格清除字体图标*/
  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before {
    content: '';
  }

  /*九宫格背景图片*/
  .mui-icon-home {
    background-image: url("../../static/img/news.png");
  }

  .mui-icon-email {
    background-image: url("../../static/img/picShare.png");
  }

  .mui-icon-chatbubble {
    background-image: url("../../static/img/goodShow.png");
  }

  .mui-icon-location {
    background-image: url("../../static/img/feedback.png");
  }

  .mui-icon-search {
    background-image: url("../../static/img/search.png");
  }

  .mui-icon-phone {
    background-image: url("../../static/img/callme.png");
  }

  .mui-icon {
    background-repeat: round;
    height: 50px;
    width: 50px;
  }

</style>
