<template>
  <div class="TenantMain">
    <div class="TenantMain-Header">
      <div class="TenantMain-Header-Logo">
        <el-row>
          <img src="..\assets\image\세입자.png" width="50" height="50" />
        </el-row>
        <el-row>
          <label>세입자</label>
        </el-row>
      </div>
      <div class="TenantMain-Header-Path">
        <div class="name">붐힐 빌리지</div>
        <div class="room">101호</div>
        <div>전주시 덕진구 기린대로 81</div>
      </div>
      <div class="TenantMain-Header-BlankBox"></div>
      <div class="TenantMain-Header-Notice">
        <div class="Notice_Icon">
          <img src="..\assets\image\알림.png" width="50" height="50" />
        </div>
        <div class="Notice_Content">
          <label>---&nbsp;&nbsp;</label>
          <label>이번 달 25일 건물 소독이 있을 예정입니다~~!</label>
          <label>&nbsp;&nbsp;---</label>
        </div>
      </div>
    </div>
    <div class="TenantMain-Contents">
      <br />
      <el-row type="flex">
        <el-col>
          <div class="TenantMain-Contents-Receipt-Left">
            <div class="TenantMain-Contents-Receipt-Left-Background">
              <img src="..\assets\image\세입자_영수증1.png" width="600" height="700" />
            </div>
            <div class="BackgroundCover"></div>
            <div class="TenantMain-Contents-Receipt-Left-PaymentDate">
              <label>월세 납부일</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-PaymentDate-Result">
              <label>: 매월 15일</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Monthly">
              <label>월세</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Monthly-Result">
              <label>: 250,000원</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Deposit">
              <label>현재 보증금</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Deposit-Result">
              <label>: 5,000,000원</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Gas">
              <label>가스비 납부일 : 매월</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Gas-Result">
              <label>10일</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Water">
              <label>수도세 납부일 : 매월</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Water-Result">
              <label>10일</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Electricity">
              <label>전기세 납부일 : 매월</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Electricity-Result">
              <label>10일</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Left-Question">
              <el-button
                style="background-color: #203864; color: #ffffff; font-size: 26px; font-family: a스마일B;"
              >1:1 문의 하기</el-button>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="TenantMain-Contents-Receipt-Right">
            <div class="TenantMain-Contents-Receipt-Right-Background">
              <img src="..\assets\image\세입자_영수증2.png" width="500" height="700" />
            </div>
            <div class="TenantMain-Contents-Receipt-Right-Room">
              <label>101</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Right-Title">
              <label>호 영수증</label>
            </div>
            <div class="TenantMain-Contents-Receipt-Right-Icon">
              <div class="TenantMain-Contents-Receipt-Right-Icon-Monthly">
                <img src="..\assets\image\전월세, 초록.png" width="60px" height="60px" />
                <div class="TenantMain-Contents-Receipt-Right-Icon-Monthly-Name">
                  <label>&nbsp&nbsp&nbsp월세</label>
                </div>
              </div>
              <div class="TenantMain-Contents-Receipt-Right-Icon-Gas">
                <img src="..\assets\image\가스비, 초록.png" width="60px" height="60px" />
                <div class="TenantMain-Contents-Receipt-Right-Icon-Gas-Name">
                  <label>&nbsp&nbsp가스비</label>
                </div>
              </div>
              <div class="TenantMain-Contents-Receipt-Right-Icon-Electricity">
                <img src="..\assets\image\전기세, 빨강.png" width="60px" height="60px" />
                <div class="TenantMain-Contents-Receipt-Right-Icon-Electricity-Name">
                  <label>&nbsp&nbsp전기세</label>
                </div>
              </div>
              <div class="TenantMain-Contents-Receipt-Right-Icon-Water">
                <img src="..\assets\image\수도세, 초록.png" width="60px" height="60px" />
                <div class="TenantMain-Contents-Receipt-Right-Icon-Water-Name">
                  <label>&nbsp&nbsp수도세</label>
                </div>
              </div>
            </div>
            <div class="TenantMain-Contents-Receipt-Right-Money">
              <div class="TenantMain-Contents-Receipt-Right-Money-Monthly">
                <label>&#8361; 250,000</label>
              </div>
              <div class="TenantMain-Contents-Receipt-Right-Money-Gas">
                <label>&#8361; 100,000</label>
              </div>
              <div class="TenantMain-Contents-Receipt-Right-Money-Electricity">
                <label>&#8361; 135,000</label>
              </div>
              <div class="TenantMain-Contents-Receipt-Right-Money-Water">
                <label>&#8361; 30,000</label>
              </div>
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
      form: {
        id: "",
        pw: ""
      },
      main_img: require("@/assets/image/apartment.png")
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    }
  }
};
</script>

<style lang='scss' scoped>
.vertContainer {
  display: flex;
}
.TenantMain {
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
    &-BlankBox {
      float: left;
      height: 80px;
      width: 300px;
      border-radius: 5px;
    }
    &-Notice {
      float: left;
      background: silver;
      height: 60px;
      width: 800px;
      border-radius: 5px;
      .Notice_Icon {
        padding: 5px 0px 0px 20px;
        float: left;
      }
      .Notice_Content {
        padding: 19px 0px 0px 0px;
        font-size: 18px;
        color: rgb(22, 107, 40);
      }
    }
  }
  &-Contents {
    color: rgb(32, 56, 100);
    &-Receipt {
      &-Left {
        /*
        background-image: url("../assets/image/세입자_영수증1.png");
        height: 100%;
        width: 100%;
        background-size: cover;
        */
        &-Background {
          z-index: 99;
          position: absolute;
          left: 90px;
          top: 0px;
        }
        &-PaymentDate {
          z-index: 100;
          position: absolute;
          font-size: 20px;
          font-weight: bold;
          left: 195px;
          top: 120px;
          &-Result {
            z-index: 100;
            position: absolute;
            font-size: 20px;
            font-weight: bold;
            left: 195px;
            top: 160px;
          }
        }
        &-Monthly {
          z-index: 101;
          position: absolute;
          font-size: 20px;
          font-weight: bold;
          left: 395px;
          top: 120px;
          &-Result {
            z-index: 101;
            position: absolute;
            font-size: 20px;
            font-weight: bold;
            left: 360px;
            top: 160px;
          }
        }
        &-Deposit {
          z-index: 102;
          position: absolute;
          font-size: 20px;
          font-weight: bold;
          left: 530px;
          top: 120px;
          &-Result {
            z-index: 102;
            position: absolute;
            font-size: 20px;
            font-weight: bold;
            left: 520px;
            top: 160px;
          }
        }
        &-Gas {
          z-index: 103;
          position: absolute;
          font-size: 27px;
          font-weight: bold;
          left: 250px;
          top: 270px;
          &-Result {
            z-index: 103;
            position: absolute;
            font-size: 27px;
            font-weight: bold;
            left: 500px;
            top: 270px;
          }
        }
        &-Water {
          z-index: 103;
          position: absolute;
          font-size: 27px;
          font-weight: bold;
          left: 250px;
          top: 390px;
          &-Result {
            z-index: 103;
            position: absolute;
            font-size: 27px;
            font-weight: bold;
            left: 500px;
            top: 390px;
          }
        }
        &-Electricity {
          z-index: 103;
          position: absolute;
          font-size: 27px;
          font-weight: bold;
          left: 250px;
          top: 500px;
          &-Result {
            z-index: 103;
            position: absolute;
            font-size: 27px;
            font-weight: bold;
            left: 500px;
            top: 500px;
          }
        }
        &-Question {
          z-index: 104;
          position: absolute;
          font-weight: bold;
          left: 320px;
          top: 585px;
        }
      }
      &-Right {
        &-Background {
          z-index: 99;
          position: absolute;
          left: 900px;
          top: 0px;
        }
        &-Room {
          z-index: 100;
          position: absolute;
          font-size: 45px;
          font-weight: bold;
          left: 1040px;
          top: 75px;
        }
        &-Title {
          z-index: 100;
          position: absolute;
          font-size: 45px;
          font-weight: bold;
          left: 1100px;
          top: 75px;
        }
        &-Icon {
          z-index: 100;
          position: absolute;
          left: 930px;
          top: 150px;

          &-Monthly {
            z-index: 100;
            position: absolute;
            top: 0px;
          }
          &-Gas {
            z-index: 100;
            position: absolute;
            top: 90px;
          }
          &-Electricity {
            z-index: 100;
            position: absolute;
            top: 180px;
          }
          &-Water {
            z-index: 100;
            position: absolute;
            top: 270px;
          }
        }
        &-Money {
          &-Monthly {
            z-index: 103;
            position: absolute;
            font-size: 40px;
            font-weight: bold;
            left: 1050px;
            top: 165px;
          }
          &-Gas {
            z-index: 103;
            position: absolute;
            font-size: 40px;
            font-weight: bold;
            left: 1050px;
            top: 255px;
          }
          &-Electricity {
            z-index: 103;
            position: absolute;
            font-size: 40px;
            font-weight: bold;
            left: 1050px;
            top: 340px;
          }
          &-Water {
            z-index: 103;
            position: absolute;
            font-size: 40px;
            font-weight: bold;
            left: 1050px;
            top: 435px;
          }
        }
      }
    }
  }
}
</style>