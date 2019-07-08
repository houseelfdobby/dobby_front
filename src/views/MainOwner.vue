<template>
  <div class="MainOwner">
    <nav>nav</nav>
    <section class="MainOwner-Main">
      <div class="Floor" v-for="j in 3" :key="j">
        <div class="Floor-Number">
          <div class="Floor-Number-Text">3F</div>
        </div>
        <div class="Floor-Rooms">
          <Room :floor="j"></Room>
        </div>
        <div class="Floor-Infor">
          <div class="Floor-Infor-Head">* 3층 건의사항 *</div>
          <div class="Floor-Infor-Content">
            <ul>
              <li>302호 문 수리</li>
              <li>302호 문 수리</li>
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
import Room from "@/components/Room/Room.vue";

export default {
  name: "MainOwner",
  components: {
    Room: Room
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Floor {
  background-color: $backgroundColor;
  margin: 30px auto;
  display: flex;
  align-items: center;
  padding-left:15px;
  &-Number {
    padding:15px 40px;
    height: fit-content;
    width: fit-content;
    color: white;
    border: 1px solid $mainColor;
    border-radius: 30px;
    background-color: rgb(185, 235, 111);
  }
  &-Rooms {
    width: 60%;
    // background-color: rgb(158, 59, 59);
  }
  &-Infor {
    border-left: 2px solid $mainColor;
    box-sizing: border-box;
    width: 25%;
    &-Content{
      height:100px;
      overflow-y: scroll;
      background-color: rgb(224, 224, 224);
    }
  }
}
</style>