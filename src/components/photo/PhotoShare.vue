<template>
  <div class="tmpl">
    <nav-bar title="图文分享"></nav-bar>
    <div class="tabHeader">
      <ul>
        <li v-for="(data,index) in tabData" :key="index">
          <a @click="loadImg(data.columnId)">{{data.columnName}}</a>
        </li>
      </ul>
    </div>


    <div class="photo-list">
      <ul>
        <li v-for="(img,index) in images" :key="index">
          <router-link :to="{name:'photo.detail',params:{id:img.cover[0]}}">
            <img v-lazy="$GLOBAL.maxImage + img.cover[0]">
            <p>
              <span v-text="img.title"></span>
              <br>
              <span v-text="img.title"></span>
            </p>
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
        tabData: [],
        images: []
      }
    },
    created() {
      this.$ajax.post(this.$GLOBAL.newsTab, {
        eId: "10000040",
        oIdPath: ["10000000", "50261000", "50261123", "50261874"]
      }).then(res => {
        this.tabData = res.data.data
      });
      this.loadImg('new_10000001');
    },
    methods: {
      loadImg(id) {
        this.images=[];
        this.$ajax.post('/tools/news/news/carousel', {
          columnId: id
        })
          .then(res => {
            this.images = res.data.data;
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .tabHeader li {
    list-style: none;
    display: inline-block;
    height: 30px;
    margin-left: 10px;
  }

  .tabHeader ul {
    white-space: nowrap;
    padding-left: 0px;
    overflow-x: auto;
    margin: 5px;
  }

  .photo-list ul {
    padding-left: 0px;
    margin: 0px;
  }

  .photo-list li {
    list-style: none;
    position: relative;
  }

  .photo-list img {
    width: 100%;
    vertical-align: top;
  }

  .photo-list p {
    position: absolute;
    width: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
    bottom: 0px;
  }

  image[lazy=loading] {
    width: 10px;
    height: 10px;
    margin: auto;
  }

</style>
