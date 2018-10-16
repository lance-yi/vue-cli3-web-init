<template>
  <div class="navbox">
    <div class="headcom">
      <div class="logobox">
        <img src="../../public/img/logo2.png" class="logo"/>
      </div>
    </div>
    <ul class="nav">
      <li >
        <img src="../../public/img/1.png" class="navicon"/>
        <p>安全管理</p>
      </li>
      <li class="check">
        <img src="../../public/img/2.png" class="navicon"/>
        <p>人员设备管理</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navbox{
  position: absolute;
  top: 0;
  width: 15%;
  height: 100%;
  font-size: 14px;
  text-align: left;
}
.headcom div{
  text-align: center;
  width: 15%;
  background:#F8F9FA ;
  height: 100%;
  display: flex;
  align-items: center;
}
.headcom .logobox{
  /*height: 100px;*/
  text-align: center;
}
.logo{
  background-size: 100% 100%;
  width: 40px;
  align-items: center;
  margin: 0 auto;
}
.textlog{
  height: 50px;
  margin-left: 4%;
}
.nav{
  width: 15%;
  background: #F8F9FA;
  height: 100%;
  position: fixed;
  top:10%;
}
.nav li{
  padding: 10px 0;
  display:-webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  border-left: 5px solid #F8F9FA;
}
.nav .check{
  border-left: 5px solid #1D60FE;
  background: #fff;
}
.navicon{
  width: 20px;
  height: 20px;
  margin-left: 40px;
}
.nav li p{
  font-size: #000;
  font-size: 18px;
  margin-left: 30px;
  color: #7E8184;
}
</style>
