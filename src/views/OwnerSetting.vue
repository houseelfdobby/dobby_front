<template>
  <div class="OwnerSetting">
    <div class="OwnerSetting-Header">
      <div class="OwnerSetting-Header-Logo">
        <el-row>
          <img src="../assets/image/관리자.png" width="50" height="50" />
        </el-row>
        <el-row>
          <label>관리자</label>
        </el-row>
      </div>
      <div class="OwnerSetting-Header-Path">
        <div class="name">붐힐 빌리지</div>
        <div class="room">101호</div>
        <div>전주시 덕진구 기린대로 81</div>
      </div>
    </div>
    <div class="OwnerSetting-Contents">
      <br />
      <el-row type="flex">
        <el-col>
          <div class="OwnerSetting-Contents-Left">
            <div class="OwnerSetting-Contents-Left-Background">
              <img src="../assets/image/관리자_배경1.png" width="600" height="700" />
            </div>
            <div class="OwnerSetting-Contents-Left-Grid">
              <div class="OwnerSetting-Contents-Left-Grid-UserPhoto">사진</div>
              <div>이름 : 홍길동 (2019.01.15 ~ 2020.01.15)</div>
              <div class="OwnerSetting-Contents-Left-Grid-Enpty">(Empty)</div>
              <div>전화번호부: 101-1234-5678</div>
              <div>월세 : &#8361; 300,000 / 보증금: &#8361; 5,000,000</div>
              <div>월세 납부일: 매월 15일</div>
              <div class="OwnerSetting-Contents-Left-Grid-Gas">
                <label>가스비: &#8361;</label>
                <div class="OwnerSetting-Contents-Left-Grid-Gas-Input">
                  <el-input placeholder="ex) 30000" v-model="Gas"></el-input>
                </div>
                <div class="OwnerSetting-Contents-Left-Grid-Gas-Save">
                  <el-button style="width:100px; background-color:#203864; color:#FFFFFF;">저장</el-button>
                </div>
              </div>
              <div class="OwnerSetting-Contents-Left-Grid-Electricity">
                <label>전기세: &#8361;</label>
                <div class="OwnerSetting-Contents-Left-Grid-Electricity-Input">
                  <el-input placeholder="ex) 30000" v-model="Electricity"></el-input>
                </div>
                <div class="OwnerSetting-Contents-Left-Grid-Electricity-Save">
                  <el-button style="width:100px; background-color:#203864; color:#FFFFFF;">저장</el-button>
                </div>
              </div>
              <div class="OwnerSetting-Contents-Left-Grid-Water">
                <label>수도세: &#8361;</label>
                <div class="OwnerSetting-Contents-Left-Grid-Water-Input">
                  <el-input placeholder="ex) 30000" v-model="Water"></el-input>
                </div>
                <div class="OwnerSetting-Contents-Left-Grid-Water-Save">
                  <el-button style="width:100px; background-color:#203864; color:#FFFFFF;">저장</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="OwnerSetting-Contents-Right">
            <div class="OwnerSetting-Contents-Right-Background">
              <img src="../assets/image/관리자_배경2.png" width="600" height="700" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      Gas: "",
      Electricity: "",
      Water: ""
    };
  }
};
</script>

<style lang='scss' scoped>
.template {
  height: 100%;
}
.vertContainer {
  display: flex;
  height: 100%;
}
.OwnerSetting {
  font-family: a스마일B;
  background-color: rgb(217, 217, 217);
  width: 100%;
  height: 100%;
  &-Header {
    display: flex;
    padding: auto 20px;

    align-items: center;
    height: 80px;
    background-color: rgb(32, 56, 100);
    color: white;
    &-Logo {
      float: left;
      padding: 0px 0px 0px 20px;
    }
    &-Path {
      float: left;
      font-size: 18px;
      padding: 0px 0px 0px 30px;
      .name {
        padding: 10px 0px 10px 0px;
        float: left;
        width: 113px;
      }
      .room {
        padding: 10px 0px 10px 0px;
        float: left;
        width: 100px;
      }
    }
  }
  &-Contents {
    color: rgb(32, 56, 100);
    height: 100%;
    &-Left {
      &-Background {
        z-index: 0;
        position: absolute;
        left: 50px;
        top: 0px;
      }
      &-Grid {
        width: 50%;
        height: 100%;
        font-size: 22px;
        z-index: 1;
        position: absolute;
        left: 130px;
        top: 130px;
        display: grid;
        grid-template-columns: 80px 55%;
        grid-template-rows: repeat(7, 77px);
        &-UserPhoto {
          grid-row: 1/2;
        }
        &-Enpty {
          grid-row: 2/10;
        }
        &-Gas,
        &-Electricity,
        &-Water {
          display: flex;
          &-Input {
            margin-left: 10px;
          }
          &-Save {
            margin-left: 5px;
          }
        }
      }
    }
    &-Right {
      &-Background {
        z-index: 99;
        position: absolute;
        left: 850px;
        top: 0px;
      }
    }
  }
}
</style>