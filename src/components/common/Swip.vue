<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(data,index) in datas" :key="index">
        <a><img :src="$GLOBAL.maxImage + data.cover[0]"></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Swip'
      }
    },
    props: ['datas'],
  }
</script>

<style scoped>

</style>
