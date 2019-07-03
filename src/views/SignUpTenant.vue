<template>
  <div class="SignUp">
    <div class="SignUp-Cotent">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
          <img src="@/assets/도비.png" width="50" height="50" alt />
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
        <button type="submit" class="SignUp-FormButton">가입하기</button>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.SignUp {
  background-color: rgb(217,217,217);
  &-Form{ 
    width: 100%;
    max-width: 300px;
    margin-left: 330px;
    &Button{
      background-color: rgb(32,56,100);
      color: white;
      width: 166px;
    }
  }

 
}

 
</style>


