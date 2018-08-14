<template>
  <div class="tmpl">
    <nav-bar title="商品列表"></nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      loading-text="加载中..."
      :offset="offset">
      <div class="list">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in list"
              :key="index" @click="toDetail(item.cover[0])">
            <img :src="$GLOBAL.maxImage+item.cover[0]">
            <div>
              <span>{{item.title}}</span>
              <br/>
              <span>￥123</span>
              <span>￥999</span>
              <br/>
              <span>热卖中</span>
            </div>
          </li>
        </ul>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: 300,
      newsTime: 0
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.$ajax
          .post("/tools/news/news/more", {
            columnId: "new_10000001",
            publishTime: this.newsTime,
            pageSize: 20,
            operation: 2,
            tag: 1
          })
          .then(res => {
            console.log("newsTime===" + this.newsTime);
            if (res.data.data.length !== 0) {
              this.newsTime =
                res.data.data[res.data.data.length - 1].publishTime;
            }
            this.list = this.list.concat(res.data.data);
            console.log(this.list);
          })
          .catch(err => {})
          .finally(() => {
            this.loading = false;
          });
      }, 500);
    },
    toDetail(id) {
      this.$router.push({ name: "goods.detail", query: { id: id } });
    }
  },

  created() {}
};
</script>

<style scoped>
.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: 0;
  margin: 0;
}

.list {
  position: relative;
}

.list div {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.list span:nth-child(1) {
  color: white;
  text-align: left;
  float: left;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.list span:nth-child(3) {
  color: red;
  float: left;
}

.list span:nth-child(4) {
  color: blue;
  float: right;
  margin-right: 30px;
  text-decoration: line-through;
}

.list span:nth-child(6) {
  color: yellow;
  float: left;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
  width: 50%;
  padding: 5px;
  border: 0;
}

.mui-col-xs-4 img {
  width: 100%;
  height: 205px;
  vertical-align: top;
  border: 1px solid #000000;
  border-radius: 15px;
  background-color: white;
}
</style>
