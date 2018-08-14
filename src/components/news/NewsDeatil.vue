<template>
    <div class="tmpl">
      <nav-bar title="新闻详情"></nav-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },

      created(){
          console.log(this.$route.query.content)
      }
    }
</script>

<style scoped>

</style>
