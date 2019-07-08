<template>
  <div class="TenantMain">
    <div class="TenantMain-Header">
      <div class="TenantMain-Header-Logo">
        <el-row>
          <img src="..\assets\image\세입자.png" width="50" height="50" />
        </el-row>
        <el-row>
          <label>세입자</label>
        </el-row>
      </div>
      <div class="TenantMain-Header-Path">
        <div class="name">붐힐 빌리지</div>
        <div class="room">101호</div>
        <div>전주시 덕진구 기린대로 81</div>
      </div>
      <div class="TenantMain-Header-BlankBox"></div>
      <div class="TenantMain-Header-Notice">
        <div class="Notice_Icon">
          <img src="..\assets\image\알림.png" width="50" height="50" />
        </div>
        <div class="Notice_Content">
          <label>---&nbsp;&nbsp;</label>
          <label>이번 달 25일 건물 소독이 있을 예정입니다~~!</label>
          <label>&nbsp;&nbsp;---</label>
        </div>
      </div>
    </div>
    <el-main>
      <div>
        <el-row type="flex">
          <el-col>
            <img src="..\assets\image\세입자_영수증1.png" width="600" height="700" />
          </el-col>
          <el-col>
            <img src="..\assets\image\세입자_영수증2.png" width="500" height="700" />
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        pw: ""
      },
      main_img: require("@/assets/image/apartment.png")
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    }
  }
};
</script>

<style lang='scss' scoped>
.vertContainer {
  display: flex;
}
.TenantMain {
  font-family: a스마일B;
  background-color: rgb(217, 217, 217);
  &-Header {
    display: flex;
    padding: auto 20px;

    align-items: center;
    height: 80px;
    background-color: rgb(32, 56, 100);
    color: white;
    &-Logo {
      float: left;
      padding: 0px 0px 0px 20px;
    }
    &-Path {
      float: left;
      font-size: 18px;
      padding: 0px 0px 0px 30px;
      .name {
        padding: 10px 0px 10px 0px;
        float: left;
        width: 113px;
      }
      .room {
        padding: 10px 0px 10px 0px;
        float: left;
        width: 100px;
      }
    }
    &-BlankBox {
      float: left;
      height: 80px;
      width: 300px;
      border-radius: 5px;
    }
    &-Notice {
      float: left;
      background: silver;
      height: 60px;
      width: 800px;
      border-radius: 5px;
      .Notice_Icon {
        padding: 5px 0px 0px 20px;
        float: left;
      }
      .Notice_Content {
        padding: 19px 0px 0px 0px;
        font-size: 18px;
        color: rgb(22, 107, 40);
      }
    }
  }
  &-SignUp {
    &Group {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &Item {
      // background-color: aqua;
      margin-top: 15px;
      margin-bottom: 15px;
      width: 100%;
    }
    &Font {
      text-align: start;
      font-size: 30px;
      font-weight: 600;
    }
  }
  .el-main {
    .el-button {
      background-color: rgb(50, 93, 173);
      color: white;
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      height: 50px;
    }
  }
  .el-form-item {
    margin: 0;
  }
}
</style>