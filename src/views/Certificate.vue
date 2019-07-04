<template>
    <div class="Certificate">
        <div class="Certificate-Content">
            <div class="Certificate-Banner">
                <div class="Certificate-BannerImg">
                    <img class="logo" src="@/assets/도비.png" alt />
                </div>
                <div class="Certificate-BannerText">- 101호 -</div>
            </div>
            <br>
            <div class="Certificate-Confirm">
                <p>101호 홍길동씨의 방이 등록되었습니다.</p> <p>인증코드는 D-12345678 입니다.</p>
            </div>
            <br>
            <input type="button" class="Certificate-FormEnroll" value="메인화면으로 돌아가기"/> 
            <!-- 세입자 가입화면으로 -->
        </div>
    </div>
</template>

<script>
export default {};

</script>

<style lang="scss" scoped>
.Certificate{
    font-family: a스마일B;
    background-color: rgb(217, 217, 217);

     &-BannerImg {
        .logo{
        width: 50px;
        height: 50px;
    }
    }
    &-FormEnroll{
      font-family: a스마일B;  
      background-color: rgb(32,56,100);
      color: white;
      width: 234px;
    }
    }

</style>
