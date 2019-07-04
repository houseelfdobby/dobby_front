<template>
  <div class="SignUp">
    <div class="SignUp-Cotent">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
          <img class="logo" src="@/assets/도비.png"  alt />
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
          </div>
          <div class="PassWordConfirm">
          <div class="SignUp-FormLabel">비밀번호 확인</div>
          <input type="text" class="SignUp-FormTextbox"/>
          </div>
          <div class="Address">
          <div class="SignUp-FormLabel">건물주소</div>
          <input type="text" class="SignUp-FormZipCode" placeholder="우편 번호"/> &nbsp; 
          <input type="button" class="SignUp-FormSearch" value="검색"/>
          </div>
          <div class="DetailAddress">
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
          <input type="text" class="SignUp-FormAccountNumber" placeholder="계좌 번호" />
          </div>
          <div class="Building">        
            <div class="SignUp-FormLabel">건물상세정보</div>
            <input type="text" class="SignUp-FormBuildingFloor" placeholder="층"> &nbsp;
            <input type="text" class="SignUp-FormBuildingRoom"  placeholder="호"/>
          </div>
          <br>
            <input type="button" class="SignUp-FormEnroll" value="가입하기"/> 
            <!-- 건물주 Main으로  -->
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
  background-color: rgb(217, 217, 217);
  &-Content {
  }
  &-BannerImg {
    .logo{
      width: 50px;
      height: 50px;

    }
  }
  &-Form {
    width: 100%;
    max-width: 300px;
    margin: auto;
    &Item{
      .Name{
        padding: 0px 0px 8px 0px;
      }
      .PassWord{
        padding: 0px 0px 8px 0px;
      }
      .PassWordConfirm{
        padding: 0px 0px 8px 0px;
      }
      .Address{
        padding: 0px 0px 8px 0px;
      }
      .DetailAddress{
        padding: 0px 0px 8px 0px;
      }
      .Account{
        padding: 0px 0px 8px 0px;
      }
    }
    &Textbox{
      width:230px;
      height: 22px;
      border: 1px solid #999999;
          }
    &ZipCode{
      width: 140px;
      height: 22px;
      border: 1px solid #999999;
    }
    &AccountNumber{
      width: 132px;
      height: 22px;
      border: 1px solid #999999;
    }
    &BuildingFloor{
      width:105px;
      height: 22px;
      border: 1px solid #999999;
    }
    &BuildingRoom{
      width:105px;
      height: 22px;
      border: 1px solid #999999;
    }
   
    &Search{
      font-family: a스마일B;
      background-color: rgb(32,56,100);
      color: white;
      width:75px;
      height: 22px;
      border: 1px solid rgb(32,56,100);
      border-radius: 10px;
    }
    &Enroll{
      font-family: a스마일B;
      background-color: rgb(32,56,100);
      color: white;
      width: 234px;
      height: 22px;
      border: 1px solid rgb(32,56,100);
      border-radius: 10px;

    }
   
  }
  
}

</style>


