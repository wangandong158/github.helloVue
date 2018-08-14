<template>
    <div class="tmpl">
        <nav-bar title="商品详情"></nav-bar>
        <span>购买数量</span>
        <van-stepper v-model="value" :min="1" :default-value="1" @plus='plus' @minus='minus' @change='change' />
        <van-button class="buy">
            立即购买
        </van-button>
        <van-button class="add" @click="addShpo">
            加入购物车
        </van-button>

    </div>
</template>

<script>
import connect from "../common/connect.js";
import prodTools from "../common/ProTools.js";
export default {
    data() {
        return {
            name: "GoodDetail",
            value: null,
            id: null
        };
    },
    created() {
        this.id = this.$route.query.id;
        console.log(this.$route.query.id);
    },
    methods: {
        plus() {
            console.log("plus===" + this.value);
        },
        minus() {
            console.log("minus===" + this.value);
        },
        change() {
            console.log("change===" + this.value);
        },
        addShpo() {
            prodTools.addOrUpData({ id: this.id, num: this.value });
            connect.$emit("addShopcart");
        }
    }
};
</script>

<style scoped>
.buy {
    background-color: blue;
    color: white;
    border-radius: 5px;
    width: 100px;
}

.add {
    background-color: red;
    border-radius: 5px;
    color: white;
    width: 100px;
}
</style>
