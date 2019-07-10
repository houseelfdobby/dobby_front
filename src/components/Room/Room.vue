<template>
  <div ref="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide" v-for="i in 6" :key="`${floor}`+i">
          <div class="Room">
            <div class="Room-Icons">
              <img class="Room-Icon" :src="icons.month_green" alt />
              <img class="Room-Icon" :src="icons.gas_green" alt />
              <img class="Room-Icon" :src="icons.elec_green" alt />
              <img class="Room-Icon" :src="icons.water_green" alt />
            </div>
            <div class="Room-Content">
              <div class="Room-Content-Number">301</div>
              <div class="Room-Content-Name">세입자명</div>
              <el-button>관리하기</el-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

import gas_green from "@/assets/image/gas_green.png";
import month_green from "@/assets/image/month_green.png";
import water_green from "@/assets/image/water_green.png";
import elec_green from "@/assets/image/elec_green.png";

export default {
  props: ["floor"],
  data() {
    return {
      icons: {
        gas_green: gas_green,
        month_green: month_green,
        water_green: water_green,
        elec_green: elec_green
      }
    };
  },
  mounted() {
    new Glide(this.$refs.glide, {
      type: "slider",
      rewind: false,
      perView: 5
    }).mount();
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.glide__slides{
  margin:10px auto;
}
.Room {
  font-size: 16px;
  &-Icon {
    width: 25px;
  }
  &-Content {
    width: 90px;
    margin: auto;
    color: white;
    background-color: $mainColor;
    border-radius: 18%;
    padding:10px;
    .el-button {
      width: 100%;
      padding: 10px 5px;
      margin-top:5px;
      // margin: 2px 0px 7px 0px;
    }
  }
}
</style>