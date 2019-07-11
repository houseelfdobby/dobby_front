<template>
  <div class="Tenant SignUp">
    <div class="SignUp-Content">
      <div class="SignUp-Banner">
        <img class="SignUp-BannerImg" src="@/assets/image/도비.png" alt />
        <div class="SignUp-BannerText">- TENANT -</div>
      </div>
      <div class="SignUp-Form">
        <div class="SignUp-FormItem" v-for="(formItem,index) in formList" :key="'singup'+index">
          <div class="SignUp-FormLabel" v-text="formItem.name"></div>
          <el-input class="SignUp-FormInput" :type="formItem.type" v-model="formItem.value"></el-input>
        </div>
        <input type="button" class="SignUp-FormEnroll" value="가입하기" />
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
@import "@/assets/css/index.scss";
</style>