<template>
  <div class="SignUp">
    <div class="SignUp-Cotent">
      <div class="SignUp-Banner">
        <div class="SignUp-BannerImg">
          <img class="logo" src="@/assets/image/도비.png" alt />
        </div>
        <div class="SignUp-BannerText">- HOUSE OWNER -</div>
        <br />
      </div>
      <div class="SignUp-Form" align="left">
        <div class="SignUp-FormItem" v-for="(item, index) in formItems" :key="'basicform'+index">
          <div class="SignUp-FormLabel">{{item.label}}</div>
          <el-input class="SignUp-FormTextInput"></el-input>
        </div>
        <div class="SignUp-FormItem">
          <div class="SignUp-FormLabel">건물주소</div>
          <input type="text" class="SignUp-FormZipCode" placeholder="우편 번호" /> &nbsp;
          <input type="button" class="SignUp-FormSearch" value="검색" />
        </div>
        <div class>
          <input type="text" class="SignUp-FormTextbox" placeholder="상세 주소" />
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
          <input type="text" class="SignUp-FormBuildingFloor" placeholder="층" /> &nbsp;
          <input type="text" class="SignUp-FormBuildingRoom" placeholder="호" />
        </div>
        <br />
        <input type="button" class="SignUp-FormEnroll" value="가입하기" />
        <!-- 건물주 Main으로  -->
      </div>
    </div>
  </div>
</template>

<script>
import VueDaumPostcode from "vue-daum-postcode";

export default {
  data() {
    return {
      formItems: [
        { label: "이름" },
        { label: "비밀번호" },
        { label: "비밀번화 확인" }
      ]
    };
  },
  components: {
    "vue-daum-postcode": VueDaumPostcode
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.el-input {
  border: 1px solid $mainColor;
  margin: 2px;
}
.el-input__inner {
  margin: 2px;
}
.SignUp {
  font-family: a스마일B;
  background-color: rgb(217, 217, 217);
  &-BannerImg {
    .logo {
      width: 50px;
      height: 50px;
    }
  }
  &-Form {
    width: 100%;
    max-width: 350px;
    margin: auto;
    &Item {
      margin: 6px;
    }
    &TextInput {
      width: 100%;
    }
    &ZipCode {
      width: 140px;
      height: 22px;
      border: 1px solid #999999;
    }
    &AccountNumber {
      width: 132px;
      height: 22px;
      border: 1px solid #999999;
    }
    &BuildingFloor {
      width: 105px;
      height: 22px;
      border: 1px solid #999999;
    }
    &BuildingRoom {
      width: 105px;
      height: 22px;
      border: 1px solid #999999;
    }

    &Search {
      font-family: a스마일B;
      background-color: rgb(32, 56, 100);
      color: white;
      width: 75px;
      height: 22px;
      border: 1px solid rgb(32, 56, 100);
      border-radius: 10px;
    }
    &Enroll {
      font-family: a스마일B;
      background-color: rgb(32, 56, 100);
      color: white;
      width: 234px;
      height: 22px;
      border: 1px solid rgb(32, 56, 100);
      border-radius: 10px;
    }
  }
}
</style>