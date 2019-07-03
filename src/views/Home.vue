<template>
  <div class="SiginIn">
    <div class="SiginIn-Header">
      <div>
        로고
        <img src alt />
      </div>
      <div class="SiginIn-Header-Form">
        <el-row>
          <el-col :offset="5" :span="2">
            <span class="SiginIn-Header-FormLabel">ID</span>
          </el-col>
          <el-col :span="5">
            <el-input v-model="form.id" clearable></el-input>
          </el-col>
          <el-col :span="2">
            <span class="SiginIn-Header-FormLabel">PW</span>
          </el-col>
          <el-col :span="5">
            <el-input v-model="form.pw" clearable></el-input>
          </el-col>
          <el-col :offset="1" :span="3">
            <el-button type="primary" @click="onSubmit">Login</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-main>
      <div>
        <el-row type="flex">
          <el-col>
            <el-image :src="main_img"></el-image>
          </el-col>
          <el-col>
            <div class="SiginIn-SignUpGroup">
              <div class="SiginIn-SignUpItem SiginIn-SignUpFont">가입하기</div>
              <div class="SiginIn-SignUpItem">
                <el-button>건물주</el-button>
              </div>
              <div class="SiginIn-SignUpItem">
                <el-button>세입자</el-button>
              </div>
            </div>
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
.SiginIn {
  &-Header {
    padding: auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: rgb(32, 56, 100);
    color: white;
    &-Form {
      display: grid;
      &Label{
        display:inline-block;
        vertical-align:middle;
        vertical-align: -webkit-baseline-middle;
        // padding-top:15px;
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
      font-size:20px;
      font-weight: 600;
      height:50px;
    }
  }
  .el-form-item {
    margin: 0;
  }
}
</style>