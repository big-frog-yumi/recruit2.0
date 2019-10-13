<template>
  <div class="about_container">
    <div class="about_pic">
      <img width="700px" src="../assets/about.png">
    </div>
    <div class="about_card">
      <p class="card_pra">网络管理委员会为你提供</p>
      <div class="card">
        <div class="card_icon"><svg class="icon" font-size="60px" vertical-align="middle" display="table-cell" aria-hidden="true">
          <use xlink:href="#icon-gongzuotai"></use>
        </svg></div>
        <p class="card_title">优秀的办公环境</p>
      </div>
      <div class="card">
        <div class="card_icon"><svg class="icon" font-size="60px" vertical-align="middle" display="table-cell" aria-hidden="true">
          <use xlink:href="#icon-shu"></use>
        </svg></div>
        <p class="card_title">丰富的图书资源</p>
      </div>
      <div class="card">
        <div class="card_icon"><svg class="icon" font-size="60px" vertical-align="middle" display="table-cell" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg></div>
        <p class="card_title">充足的经费</p>
      </div>
      <div class="card">
        <div class="card_icon"><svg class="icon" font-size="60px" vertical-align="middle" display="table-cell" aria-hidden="true">
          <use xlink:href="#icon-gongzuo"></use>
        </svg></div>
        <p class="card_title">真实网络环境下的实践机会</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'about'
}
</script>

<style scoped>
.about_pic{
  float: left;
  padding-left: 30px;
  padding-top: 30px;
}
.about_card{
  float: left;
  width:650px;
}
.card_pra{
  display: block;
  font-size: 30px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 45px;
}
.card{
  float: left;
  width: 230px;
  height: 150px;
  border: 1px solid #efefef;
  padding-right: 60px;
  border-radius: 4px;
  margin: 10px;
}
.card:hover{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.card_icon{
  text-align: center;
  vertical-align: middle;
  display: table;
  padding-left: 70px;
}
.card_title{
  display: block;
  font-size: 20px;
  text-align: center;
  padding-top: 15px;
}
</style>