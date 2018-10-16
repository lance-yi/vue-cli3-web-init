<template>
    <div>
        <div class="centerbox">
            <div class="title">
                <p>外场维护人员</p>
            </div>
            <div>
                <i-input :value.sync="value" placeholder="请输入..." style="width: 200px" class="sousuo"></i-input>
                <i-button type="primary" class="sure">搜索</i-button>
            </div>
            <div class="rightbox">
                <div class="exj1">
                    <img src="../../public/img/lie5.png"/>
                    同步
                </div>
                <div class="exj2">
                    <img src="../../public/img/lie6.png"/>
                    导入
                </div>
                <div class="exj3">
                    <img src="../../public/img/lie7.png"/>
                    导出
                </div>
                <div class="exj4" @click="kapian" style="color:#1D60FE" v-if="acardshow">
                    <img src="../../public/img/lie4.png"/>
                    卡片模式
                </div>
                <div class="exj4" v-if="!acardshow" @click="kapian">
                    <img src="../../public/img/lie2.png"/>
                    卡片模式
                </div>
                <div class="exj4" @click="liebiao" v-if="acardshow">
                    <img src="../../public/img/lie1.png"/>
                    列表模式
                </div>
                <div class="exj4" style="color:#1D60FE" v-if="!acardshow">
                    <img src="../../public/img/lie3.png"/>
                    列表模式
                </div>
            </div>
        </div>
        <!--卡片模式-->
        <div class="cardbox" v-if="acardshow">
            <div class="rightshow">
                <div>
                    <img src="../../public/img/green.png"/>
                    <p>正常</p>
                </div>
                <div>
                    <img src="../../public/img/red.png"/>
                    <p>停用</p>
                </div>
            </div>

           <div class="cardcontent">
                <div v-for="cards in list">
                    <img src="../../public/img/green.png" class="statuds" v-if="cards.certificateStatus==0"/>
                    <img src="../../public/img/red.png" class="statuds" v-if="cards.certificateStatus==1"/>
                    <img src="../../public/img/logo2.png" class="cardicon"/>
                    <p style="font-size: 18px">{{cards.userName}}</p>
                    <p style="font-size: 18px">{{cards.company}}</p>
                    <p>证书编号：<span>{{cards.certificateNo}}</span></p>
                    <p>身份证号：<span>{{cards.idCard}}</span></p>
                    <p>手机号：<span>{{cards.mobile}}</span></p>
                </div>

           </div>
            <Page :total='totals' show-total class="fullpage" @on-change="changepage"></Page>
        </div>
    </div>
</template>
<script>

  export default {
    name: 'personmanage',
    components: {

    },
    data () {
      return {
        value: '',
        totals:14,
        list:[],
        acardshow:true,
      }
    },
    created(){
    },
    mounted(){
      this.$http.get("oauth/certificate/findAllforApp",{"token":localStorage.getItem("token")},res=>{
        this.totals = res.data.total
        this.list = res.data.list
      },err=>{
      })
    },
    methods: {
      liebiao(){
        this.acardshow = false
      },
      kapian(){
        this.acardshow = true
      },
      changepage(i){
        this.$http.get("oauth/certificate/findAllforApp",{"token":localStorage.getItem("token"),page:i},res=>{
          this.totals = res.data.total
          this.list = res.data.list
        },err=>{
        })
      }
    }
  }
</script>
<style scoped>
    .centerbox{
        padding-left: 18%;
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
    }
    .title{
        font-size: 20px;
        color: #696C6F;
        text-align: left;
        margin-top: 20px;
    }

    .sousuo{
        margin-top: 20px;
    }
    .sure{
        margin-top: 21px;
        height: 32px;
        border-radius: 0;
        background: #1D60FE;
        width: 40px;
        padding: 0;
        border-radius: 0 4px 4px 0;
        line-height: 32px;
    }
    .rightbox{
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        margin-top: 20px;
        font-size: 14px;
        align-items: center;
        margin-right: 60px;
    }
    .rightbox img{
        margin-right: 10px;
    }
    .exj1{
        border: 1px solid #1D60FE;
        color: #1D60FE;
        border-radius: 4px;
        padding: 0 8px;
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        height: 25px;
        margin-right: 20px;
    }
    .exj2{
        border: 1px solid #26BDD2;
        color: #26BDD2;
        border-radius: 4px;
        padding: 0 8px;
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        height: 25px;
        margin-right: 20px;
    }
    .exj3{
        border: 1px solid #EF3543;
        color: #EF3543;
        border-radius: 4px;
        padding: 0 8px;
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        height: 25px;
        margin-right: 20px;
    }
    .exj4{
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        margin-right: 20px;
        color: #717578;
    }
    .exj4 img{
        margin-right: 5px;
    }
    .cardbox{
        padding-left: 18%;
        margin-top: 30px;
        position: relative;
    }
    .rightshow{
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        color: #717578;
        position: absolute;
        right: 40px;
    }
    .rightshow div{
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        margin-right: 40px;
    }
    .rightshow div img{
        margin-right: 5px;
    }
    .cardcontent {
        display: flex;
        width: 100%;
        flex-wrap:wrap;
    }
    .cardcontent div{
        margin-top: 2%;
        width: 15%;
        padding: 0px 0px 3% 1.5%;
        text-align: left;
        color: #717578;
        box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
        position: relative;
        min-width: 200px;
        margin-right: 1.5%;
    }
    .cardcontent div:hover{
        transform: scale(1.1);
    }
    .cardcontent div p{
        margin-top: 10%;
    }
    .cardicon{
        position: absolute;
        right: 30px;
        top:20px;
        width: 30px;
        height: 35px;
    }
    .statuds{
        position: absolute;
        top:0;
        left: 0;
        width: 25px;
        height: 25px;
    }
    .fullpage{
        margin-top: 30px;
    }
</style>
