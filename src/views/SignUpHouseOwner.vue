<template>
  <div class="SignUp">
    <div class="SignUp-Content">
      <div class="SignUp-Banner">
        <img class="SignUp-BannerImg" src="@/assets/image/도비.png" alt />
        <div class="SignUp-BannerText">- HOUSE OWNER -</div>
      </div>
      <div class="SignUp-Form">
        <div class="SignUp-FormItem" v-for="(item, index) in formItems" :key="'basicform'+index">
          <div class="SignUp-FormLabel">{{item.label}}</div>
          <el-input class="SignUp-FormTextInput"></el-input>
        </div>
        <div class="SignUp-FormItem">
          <div class="SignUp-FormLabel">건물주소</div>
          <div class="SignUp-FormAddress">
            <el-input style="gridArea:zip"></el-input>
            <el-button style="gridArea:button">검색</el-button>
            <el-input style="gridArea:detail"></el-input>
          </div>
        </div>
        <div class="SignUp-FormItem">
          <div class="SignUp-FormLabel">건물주소</div>
          <el-select v-model="accountValue" style="width:30%;marginRight:5%;">
            <el-option
              v-for="(item,index) in accountOptions"
              :key="'account'+index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
          <el-input style="width:65%;"></el-input>
        </div>
        <div class="SignUp-FormItem">
          <div class="SignUp-FormLabel">건물상세정보</div>
          <div style="display:flex;">
            <el-input style="marginRight:20px;" placeholder="층"></el-input>
            <el-input placeholder="호"></el-input>
          </div>
        </div>
        <input type="button" class="SignUp-FormEnroll" value="가입하기" />
      </div>
      <!-- 건물주 Main으로  -->
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
      ],
      accountOptions: ["광주은행", "전북은행", "농협"],
      accountValue: ""
    };
  },
  components: {
    "vue-daum-postcode": VueDaumPostcode
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.SignUp {
  font-family: a스마일B;
  background-color: rgb(217, 217, 217);
  height: 100%;
  &-Content {
    width: 100%;
    max-width: 350px;
    margin: auto;
  }
  &-Banner {
    padding-top:35px;
    text-align: center;
    &Img{
      width:55px;
    }
  }

  &-Form {
    &TextInput {
      margin: 5px auto;
    }
    &Address {
      display: grid;
      grid-gap: 7px;
      grid-template-areas:
        "zip zip button"
        "detail detail detail";
    }
    &Enroll {
      font-family: a스마일B;
      margin-top: 50px;
      background-color: rgb(32, 56, 100);
      color: white;
      padding: 10px;
      width: 100%;
      // height: 22px;
      border: 1px solid rgb(32, 56, 100);
      border-radius: 3px;
    }
  }
}
</style>