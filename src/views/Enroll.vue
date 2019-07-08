<template>
  <div class="Enroll" style="backgroundColor:#D9D9D9; width:100%; height:100%;">
    <!--
    <el-header style="backgroundColor:#203864;">
      <el-row>
        <el-col span="1" offset="0">
          <img src="./dobby.png" width="50" height="50" />
        </el-col>
        <el-col span="3" offset="15">
          <el-input placeholder="Id" v-model="id" clearable></el-input>
        </el-col>
        <el-col span="3" offset>
          <el-input placeholder="Password" v-model="password" clearable></el-input>
        </el-col>
        <el-col span="1">
          <el-button>Login</el-button>
        </el-col>
      </el-row>
    </el-header>
    -->
    <div id="background">
      <div class="Enroll-Main" style="backgroundColor:#D9D9D9;">
        <div class="Enroll-Main-Title" style="width:380px; margin:auto;">
          <el-row>
            <el-row>
              <img src="@/assets/image/도비.png" width="50" height="50" />
            </el-row>
            <br />
            <el-row>-N호 입주-</el-row>
          </el-row>
        </div>
        <div class="Enroll-Main-Input" style="width:380px; margin:auto;">
          <br />
          <el-row>
            <el-row class="Enroll-Label">이름</el-row>
            <el-col span="23" offset="0">
              <el-input
                placeholder="ex) 이지은"
                v-model="name"
                clearable
                style="border: 1px solid #203864;"
              ></el-input>
            </el-col>
          </el-row>
          <br />
          <el-row>
            <el-row>전화번호 ('-' 제외)</el-row>
            <el-col span="23" offset="0">
              <el-input
                placeholder="ex) 010-1234-5678"
                v-model="phone"
                clearable
                style="border: 1px solid #203864;"
              ></el-input>
            </el-col>
          </el-row>
          <br />
          <el-row>
            <el-row type="flex" justify="space-around">
              <el-col offset="1">계약 유형</el-col>
              <el-col offset="2">Option 1</el-col>
              <el-col offset="2">Option 2</el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
              <el-col :span="5" offset="0">
                <div class="Enroll-Main-Input-Selete">
                  <el-col offset="1">전세/월세</el-col>
                  <select v-model="contract" style="border: 1px solid #203864; height:42px;">
                    <option disabled value>---선택---</option>
                    <option>전세</option>
                    <option>월세</option>
                  </select>
                </div>
                <!--<span>선택: {{ contract }}</span>-->
              </el-col>
              <el-col :span="8">
                <template v-if="contract === '전세'">
                  <el-col offset="7">계약 기간</el-col>
                  <el-input
                    placeholder="ex) 20191202"
                    v-model="payment_day"
                    clearable
                    style="border: 1px solid #203864;"
                  ></el-input>
                </template>
                <template v-else-if="contract === '월세'">
                  <el-col offset="7">월 납부일</el-col>
                  <el-input
                    placeholder="ex) 15"
                    v-model="payment_day"
                    clearable
                    style="border: 1px solid #203864;"
                  ></el-input>
                </template>
              </el-col>
              <el-col :span="7">
                <div id="mini">
                  <template v-if="contract === '전세'">
                    <el-col offset="1">보증금 (단위:만원)</el-col>
                    <el-input
                      placeholder="ex) 500"
                      v-model="deposit"
                      clearable
                      style="border: 1px solid #203864;"
                    ></el-input>
                  </template>
                  <template v-else-if="contract === '월세'">
                    <el-col offset="1">납부금 (단위:만원)</el-col>
                    <el-input
                      placeholder="ex) 20"
                      v-model="deposit"
                      clearable
                      style="border: 1px solid #203864;"
                    ></el-input>
                  </template>
                </div>
              </el-col>
            </el-row>
            <br />
            <div class="Enroll-Main-Input-Dues">
              <el-row type="flex" justify="space-around">
                <el-col span="6" offset="1">
                  <input type="checkbox" id="gas" value="gas" v-model="dues" />
                  <label for="gas">가스비</label>
                </el-col>
                <el-col span="6" offset="1">
                  <input type="checkbox" id="electricity" value="electricity" v-model="dues" />
                  <label for="electricity">전기세</label>
                </el-col>
                <el-col span="6" offset="1">
                  <input type="checkbox" id="water" value="water" v-model="dues" />
                  <label for="water">수도세</label>
                </el-col>
              </el-row>
              <br />
            </div>
            <el-row>계좌번호</el-row>
            <el-row type="flex" justify="space-around">
              <el-col :span="14" offset="0">
                <select v-model="bank_name" style="border: 1px solid #203864; height:42px;">
                  <option disabled value>--------은행명--------</option>
                  <option>농협</option>
                  <option>국민은행</option>
                  <option>우리은행</option>
                  <option>하나은행</option>
                  <option>신협</option>
                  <option>수협</option>
                </select>
              </el-col>
              <el-col :span="23" offset="0">
                <el-input
                  placeholder="ex) 3520538788183"
                  v-model="bank_account"
                  clearable
                  style="border: 1px solid #203864;"
                ></el-input>
              </el-col>
            </el-row>
            <br />

            <el-row type="flex" justify="space-around">
              <div class="Enroll-Main-Input-Button">
                <el-col>
                  <el-button style="width:400px; background-color:#203864; color:#FFFFFF;">입주하기</el-button>
                </el-col>
              </div>
            </el-row>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
      name: "",
      phone: "",
      contract: "",
      payment_day: "",
      deposit: "",
      bank_name: "",
      bank_account: "",
      dues: []
    };
  }
};
</script>

<style lang='scss' scoped>
.template {
  height: 100%;
}

.Enroll {
  font-family: a스마일B;
  background-color: rgb(32, 56, 100);
  color: rgb(32, 56, 100);
  border: 1px solid rgb(32, 56, 100);
  border-radius: 10px;
}
.Enroll-Label {
}
.Enroll-Main-Input {
  text-align: left;
  font-size: 10pt;
  &-Button {
    color: white;
  }
  &-Selete {
    height: 60px;
  }
  &-Dues {
  }
}
</style>