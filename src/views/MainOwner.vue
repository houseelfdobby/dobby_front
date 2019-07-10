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
            <ul class="Floor-Infor-ContentList">
              <li class="Floor-Infor-ContentItem">302호 문 수리</li>
              <li class="Floor-Infor-ContentItem">302호 문 수리</li>
              <li class="Floor-Infor-ContentItem">302호 문 수리</li>
              <li class="Floor-Infor-ContentItem">302호 문 수리</li>
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
.MainOwner {
  height: 100%;
  &-Main {
    background-color: rgb(130, 184, 255);
    max-width: 1200px;
    height: 100%;
    margin: auto;
  }
}

.Floor {
  background-color: $backgroundColor;
  margin: 30px auto;
  display: flex;
  // align-items: center;
  padding-left: 10px;
  &-Number {
    // width: 10%;
    display:flex;
    justify-content: center;
    align-items: center;
    &-Text {
      padding: 15px 40px;
      height: fit-content;
      width: fit-content;
      color: white;
      border: 1px solid $mainColor;
      border-radius: 30px;
      background-color: rgb(185, 235, 111);
    }
  }
  &-Rooms {
    width: 60%;
    display: inline-block;
    // background-color: rgb(158, 59, 59);
  }
  &-Infor {
    display: inline-block;
    border-left: 2px solid $mainColor;
    box-sizing: border-box;
    width:100%;
    &-Content {
      margin-top:8px;
      // padding-top:10px;
      text-align: start;
      height: 100px;
      overflow-y: scroll;
      background-color: rgb(124, 57, 57);
      &List{
        padding-left:33px;
        margin:0;
      }
    }
  }
}
</style>