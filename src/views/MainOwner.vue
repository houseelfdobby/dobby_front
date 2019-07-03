<template>
  <div class="MainOwner">
    <nav>nav</nav>
    <section class="MainOwner-Main">
      <div class="Floor" v-for="j in 3" :key="j">
        <div class="Floor-Number">
          <div class="Floor-Number-Text">3F</div>
        </div>
        <div class="Floor-Rooms">
          <div class="Room" v-for="i in 6" :key="i">
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
        </div>
        <div class="Floor-Infor">
          <div class="Floor-Infor-Head">* 3층 건의사항 *</div>
          <div class="Floor-Infor-Content">
            <ul>
              <li>302호 문 수리</li>
              <li>302호 문 수리</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gas_green from "../assets/image/gas_green.png";
import month_green from "../assets/image/month_green.png";
import water_green from "../assets/image/water_green.png";
import elec_green from "../assets/image/elec_green.png";
export default {
  name: "MainOwner",
  data() {
    return {
      icons: {
        gas_green: gas_green,
        month_green: month_green,
        water_green: water_green,
        elec_green: elec_green
      }
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.MainOwner {
}
.Floor {
  background-color: $backgroundColor;
  margin: 30px auto;
  display: flex;
  &-Number {
    width: 15%;
  }
  &-Rooms {
    width: 60%;
    display: grid;
    overflow: scroll;
    grid-auto-flow: row;
    grid-template-columns: repeat(6, 110px);
    // grid-template-rows: 1fr;
    // background-color: rgb(158, 59, 59);
  }
  &-Infor {
    border-left: 2px solid $mainColor;
    box-sizing: border-box;
    width: 25%;
  }
}
.Room {
  border-right: 1px solid $mainColor;
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
    .el-button {
      width: 80%;
      padding: 10px 5px;
      margin: 2px 0px 7px 0px;
    }
  }
}
</style>