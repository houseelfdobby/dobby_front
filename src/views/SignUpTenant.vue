<template>
  <div class="SignUp">
    <div class="SignUp-Content">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
          <img class="logo" src="@/assets/image/도비.png" alt />
        </div>
        <div class="SignUp-BannerText">- TENANT -</div>
        <br />
      </div>
      <div class="SignUp-Form">
        <div
          class="name SignUp-FormItem"
          v-for="(formItem,index) in formList"
          :key="'singup'+index"
        >
          <div class="SignUp-FormLabel" v-text="formItem.name"></div>
          <el-input class="SignUp-FormTextbox" :type="formItem.type" v-model="formItem.value"></el-input>
        </div>
        <div class="SignUp-FormItem">
          <input type="button" class="SignUp-FormEnroll" value="가입하기" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formList: [
        {
          name: "이름",
          type: "text",
          value: ""
        },
        {
          name: "비빌먼호",
          type: "password",
          value: ""
        },
        {
          name: "비빌먼호 확인",
          type: "password",
          value: ""
        },
        {
          name: "코드 인증",
          type: "text",
          value: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.SignUp {
  font-family: a스마일B;
  background-color: rgb(217, 217, 217);
  height: 100%;
  text-align: center;
  &-BannerImg {
    .logo {
      width: 50px;
      height: 50px;
    }
  }
  &-Form {
    width: 100%;
    max-width: 800px;
    margin: auto;
    &Item {
      margin: auto;
      max-width: 500px;
      padding: 0px 0px 8px 0px;
    }
    &Textbox {
      height: 22px;
      border: 1px solid #999999;
    }
    &Enroll {
      margin-top: 25px;
      width: 100%;
      background-color: rgb(32, 56, 100);
      color: white;
      font-weight: 550;
      padding: 10px;
      border: none;
    }
  }
}
</style>