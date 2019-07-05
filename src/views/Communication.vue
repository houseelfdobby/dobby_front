<template>
    <div class="Communication">
        <div class="Communication-Banner">
            <div class="Communication-BannerTenantInfo">
                <div class="Communication-BanneTenantrImg">
                    <img class="Tenant" src="@/assets/image/세입자.png"  alt />
                </div>
                <div class="Communication-BannerText">세입자</div>
            </div>
            <div class="Communication-BannerBuildingInfo">
                <div class="Name">붐힐 빌리지</div>
                <div class="Room">101호</div>
                <div class="BuildingAddress">전주시 덕진구 기린대로 81</div>
            </div>

            
        </div>
        <div class="Communication-Chat">
            </div>
            </div>
</template>

<script>
export default {

};
</script>

<style e lang="scss" scoped>
.Communication {
    font-family: a스마일B;
    &-Banner{
        height:80px;
        background-color: rgb(32, 56, 100);
        color: white;
        &TenantInfo{
            float: left;
            width: 8%;
        }
        &BuildingInfo{
            float: left;
            width: 18%;
            font-size: 18px;
            .Name{
                padding: 13px 0px 7px 0px;
                float: left;
                width: 113px;
            }
            .Room{
                padding: 10px 0px 7px 0px;
                float: left;
                width: 85px;
                font-size: 27px;
            }
            .BuildingAddress{
                float: left;
            }
        }
}
}
</style>
