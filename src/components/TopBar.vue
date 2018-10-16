<template>
  <div>
    <h2 class="tc">
      <img src="../../public/img/6.png"/>
      <div class="userbox">
        <div class="user">
          <img src="../../public/img/7.png"/><span>管理员</span>
        </div>
        <div class="edit">
          <img src="../../public/img/15.png"/><span>退出</span>
        </div>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tc{
  height: 10%;
  padding:20px 0;
  background: #fff;
  text-align: left;
  padding-left: 18%;
  position: relative;
  border-bottom: 1px solid #eee;
}
  .userbox{
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    right: 40px;
    top:0;
    bottom: 0;
  }
  .user{
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    border-right: 1px solid #ededed;
    padding-right: 20px;
    margin-bottom: 10px;
  }
  .edit{
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .user img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
.edit img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.edit span{
  font-size:15px;
}
.user span{
  font-size:15px;
}
</style>
