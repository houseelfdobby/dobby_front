<template>
  <div class="SignUp">
    <div class="SignUp-Cotent">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
        <img src="@/assets/image/도비.png" width="50" height="50" alt />
        </div>
        <div class="SignUp-BannerText">- HOUSE OWNER -</div>
        <br>
      </div>
      <div class="SignUp-Form" align="left" >
        <div class="SignUp-FormItem">
          <div class="Name">
          <div class="SignUp-FormLabel">이름</div>
          <input type="text" class="SignUp-FormTextbox"/>
          </div>
          <div class="PassWord">
          <div class="SignUp-FormLabel">비밀번호</div>
          <input type="text" class="SignUp-FormTextbox"/>
          <div class="SignUp-FormLabel">비밀번호 확인</div>
          <input type="text" class="SignUp-FormTextbox"/>
          </div>
          <div class="Address">
          <div class="SignUp-FormLabel">건물주소</div>
          <input type="text" class="SignUp-FormTextbox" style="width:140px;" placeholder="우편 번호"/> &nbsp; 
          <button type="submit" class="SignUp-FormButton" style="width:75px;">검색</button>
          <input type="text" class="SignUp-FormTextbox" placeholder="상세 주소"/>
          </div>
          <div class="Account">
          <div class="SignUp-FormLabel">계좌번호</div>
          <select name="bank">
            <option value selected disabled hidden>==은행==</option>
            <option value="광주은행">광주은행</option>
            <option value="전북은행">전북은행</option>
            <option value="농협">농협</option>
          </select> &nbsp;
          <input type="text" class="SignUp-FormTextbox" style="width:135px;" placeholder="계좌 번호" />
          </div>
          <div class="Building">        
            <div class="SignUp-FormLabel">건물상세정보</div>
            <input type="text" class="SignUp-FormTextbox" style="width:105px;" placeholder="층"> &nbsp;
            <input type="text" class="SignUp-FormTextbox" style="width:105px;" placeholder="호"/>
          </div>
          <br>
          <button type="submit" class="SignUp-FormButton">가입하기</button>
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
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(217, 217, 217);

  &-Form {
    width: 100%;
    max-width: 300px;
    margin: auto;
    &Textbox{
      width:230px;
      }
    &Button{
      background-color: rgb(32,56,100);
      color: white;
      width: 234px;
    }
   
  }
  
}

</style>


