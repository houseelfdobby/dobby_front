<template>
  <div class="SignUp Enroll">
    <div class="SignUp-Content">
      <div class="SignUp-Banner">
        <img class="SignUp-BannerImg" src="@/assets/image/도비.png" alt />
        <div class="SignUp-BannerText">- 101호 입주 -</div>
      </div>
      <div class="SignUp-Form">
        <div class="SignUp-FormItem">
          <div class="SignUp-FormLabel">이름</div>
          <el-input class="SignUp-FormInput"></el-input>
        </div>
        <div class="SignUp-FormItem">
          <div class="SignUp-FormLabel">전화번호(비상연락망)</div>
          <el-input class="SignUp-FormInput"></el-input>
        </div>
        <div class="Enroll-RentInfor">
          <div class="SignUp-FormItem" style="width:20%;">
            <div class="SignUp-FormLabel">월세/전세</div>
            <el-select v-model="rentValue">
              <el-option value="전세"></el-option>
              <el-option value="월세"></el-option>
            </el-select>
          </div>
          <div class="SignUp-FormItem">
            <div class="SignUp-FormLabel">
              월세 납부 날짜/
              <br />전세 기간
            </div>
            <el-input class="SignUp-FormInput"></el-input>
          </div>
          <div class="SignUp-FormItem">
            <div class="SignUp-FormLabel">보증금</div>
            <el-input class="SignUp-FormInput"></el-input>
          </div>
        </div>
        <input type="button" class="SignUp-FormEnroll" value="입주하기" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rentValue: ""
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.SignUp {
  &-Form {
    font-size: 1vw;
  }
}
.Enroll {
  &-RentInfor {
    display: flex;
    justify-content: space-between;
  }
}
</style>