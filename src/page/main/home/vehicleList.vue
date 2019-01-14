<style lang="scss" scoped>

    .vehicle{
        cursor:pointer;
        line-height: 20px;
    }
    .vehicle.selected{
        background:blue;
        color: white;
    }
</style>
<template>
  <div style="width:100%;height:100%;position:relative">
      <div style="display:inline-block;position:absolute;left:0">
          <div  class="vehicle" v-for="(item,key) in vehicleList"  @click="son(item,key)" :class='key==selected?"selected":""'>
             {{item.plateNo}}  vin:{{item.vin}}

          </div>
          <div>
              <DatePicker type="datetime" v-model="startTime" placeholder="Select date and time" style="width: 200px"></DatePicker> -
              <DatePicker type="datetime" v-model="endTime" placeholder="Select date and time" style="width: 200px"></DatePicker>
          </div>

          <Button size="large" type="primary" @click="goTrack">5分钟轨迹</Button>
          <Button size="large" type="primary" @click="goSplitTrack">分段轨迹</Button>
          <Button size="large" type="primary" @click="goPosition">实时位置</Button>
      </div>
      <div style="display:inline-block;position:absolute;right:0">
          <div id="map" style="width: 800px;height:600px"></div>
      </div>

  </div>
</template>
<script>
import Maptrack from "Maptrack"; //页面使用 需要引入
import {vehicle} from  'service/vehicleList.js';

export default {
    components: {},
    data() {
        return {
            vehicleList:[],
            selected:-1,
            startTime:"",
            endTime:"",
            vin:""
        };
    },
    mounted() {
        this.initData();
        this.vehicleData();
    },
    beforeDestroy() {
    },
    methods: {
        initData() {
            let track = new Maptrack({
                dom: "map",
                mapType: "bmap"
            });
            track.init(()=>{})

    },
        son(item,key){
            this.selected=key;
            this.vin = item.vin;
        },
        goTrack() {
            let obj = {
                vin: this.vin
            }
            if (this.startTime) obj.startTime = new Date(this.startTime).getTime()
            if (this.endTime) obj.endTime = new Date(this.endTime).getTime()
            this.$router.push({ path:"/main/mapTrack",   query:obj})
        },
        goSplitTrack() {
            let obj = {
                vin: this.vin
            }
            if (this.startTime) obj.startTime = new Date(this.startTime).getTime()
            if (this.endTime) obj.endTime = new Date(this.endTime).getTime()
            this.$router.push({ path:"/main/splitTrack",   query:obj})
        },
        goPosition() {
            let obj = {
                vin: this.vin
            }
            if (this.startTime) obj.startTime = new Date(this.startTime).getTime()
            if (this.endTime) obj.endTime = new Date(this.endTime).getTime()
            this.$router.push({ path:"/main/home",   query:obj})
        },
        vehicleData(){
            vehicle({},(data)=>{
               this.vehicleList=data;
            })
        }
    }
}

</script>
