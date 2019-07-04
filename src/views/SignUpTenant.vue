<template>
  <div class="SignUp">
    <div class="SignUp-Cotent">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
          <img class="logo" src="@/assets/image/도비.png"  alt />
        </div>
        <div class="SignUp-BannerText">- TENANT -</div>
        <br>
      </div>
      <div class="SignUp-Form" align="left">
        <div class="SignUp-FormItem">
          <div class="name">
          <div class="SignUp-FormLabel">이름</div>
          <input type="text" class="SignUp-FormTextbox"/>
          </div>
          <div class="PassWord">
          <div class="SignUp-FormLabel">비밀번호</div>
          <input type="text" class="SignUp-FormTextbox"/>
          </div>
          <div class="PassWordConfirm">
          <div class="SignUp-FormLabel">비밀번호 확인</div>
          <input type="text" class="SignUp-FormTextbox" />
          </div>
          <div class= "CodeCertification">
          <div class="SignUp-FormLabel">코드 인증</div>
          <input type="text" class="SignUp-FormTextbox"/>
          </div>
          <br>
          <input type="button" class="SignUp-FormEnroll" value="가입하기"/>
    </div>
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
    margin: auto;
    &Item{
      .name{
        padding: 0px 0px 8px 0px;
      }
      .PassWord{
        padding: 0px 0px 8px 0px;
      }
      .PassWordConfirm{
        padding: 0px 0px 8px 0px;
      }
      .CodeCertification{
        padding: 0px 0px 8px 0px;
      }
    }
    &Textbox{
      width:230px;
      height: 22px;
      border: 1px solid #999999;
          }
    &Enroll{
      font-family: a스마일B;
      background-color: rgb(32,56,100);
      color: white;
      width: 232px;
      height: 22px;
      border: 1px solid rgb(32,56,100);
      border-radius: 10px;
    }
  }
 
}
 
</style>