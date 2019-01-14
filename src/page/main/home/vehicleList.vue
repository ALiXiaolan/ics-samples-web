<style lang="scss" scoped>
.table{
    width: 60%;
    height: 60%;
    top: 20%;
    left: 40%;
}
</style>
<template>
  <div style="width:100%;height:100%;">
     <div></div>
      <div class="table">

      </div>
  </div>
</template>
<script>
import Maptrack from "Maptrack"; //页面使用 需要引入
import Element from ''
export default {
    components: {},
    data() {
        return {};
    },
    mounted() {
        this.initData();
    },
    beforeDestroy() {
    },
    methods: {
        initData() {
            let isOpen = false;
            let button = document.getElementById("button");
            let apiId = document.getElementById("apiId");
            button.onclick = function () { //按钮切换地图大小，以及更改地图样式显示
                isOpen = !isOpen;
                if (isOpen) {
                    apiId.style.width = "100%";
                    apiId.style.height = "100%";
                    apiId.style.top = "0px";
                    apiId.style.left = "0px";
                } else {
                    apiId.style.width = "60%";
                    apiId.style.height = "60%";
                    apiId.style.top = "10%";
                    apiId.style.left = "40%";
                }
            };
        }
    }
}

</script>
