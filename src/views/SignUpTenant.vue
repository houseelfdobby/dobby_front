<template>
  <div class="SignUp">
    <div class="SignUp-Cotent">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
          <img class="logo" src="@/assets/도비.png"  alt />
        </div>
        <div class="SignUp-BannerText">- TENANT -</div>
        <br>
      </div>
      <div class="SignUp-Form" align="left">
        <div class="SginUp-FormItem">
          <div class="SignUp-FormLabel">이름</div>
          <input type="text" />
        </div>
        <div class="PassWord">
          <div class="SignUp-FormLabel">비밀번호</div>
          <input type="text" />
          <div class="SignUp-FormLabel">비밀번호 확인</div>
          <input type="text" />
        </div>
        <div>
          <div class="SignUp-FormLabel">코드 인증</div>
          <input type="text" />
        </div>
        <br>
        <input type="button" class="SignUp-FormEnroll" value="가입하기"/>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.SignUp {
  font-family: a스마일B;
  background-color: rgb(217,217,217);
  &-BannerImg {
    .logo{
      width: 50px;
      height: 50px;
    }
  }
  &-Form{ 
    width: 100%;
    max-width: 300px;
    margin-left: 550px;
    &Enroll{
      font-family: a스마일B;
      background-color: rgb(32,56,100);
      color: white;
      width: 166px;
    }
  }

 
}

 
</style>


