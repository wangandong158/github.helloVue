<template xmlns:>
  <div class="parent">
    <div class="box">
      <span class="item">1</span>
      <span class="item">2</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'ShopCart'
      }
    },
  }
</script>

<style scoped>
.parent{
  width: 100%;
  height: 400px;
  background-color: burlywood;
}
.box {
  width: 100%;
  height: 400px;
  display: flex;
}
.item:nth-child(2){
  align-self: center;
}
</style>
