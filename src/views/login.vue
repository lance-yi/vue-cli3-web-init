<template>
  <div class="bigbox">
      <div class="posibox">
          <div class="flexbox">
              <div class="textbox">
                  <img src="../../public/img/logo1.png"/>
                  <p class="text">安全运维管理系统</p>
              </div>
          </div>

          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="账号" prop="name">
                  <Input v-model="formValidate.name" placeholder="请输入账号" />
              </FormItem>
              <FormItem prop="password" label="密码">
                  <Input type="password" v-model="formValidate.password" placeholder="Password" />
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('formValidate')">登 陆</Button>
              </FormItem>
          </Form>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      formValidate: {
        name: '',
        password: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '登录账号不能为空，请输入密码!', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空，请输入密码！', trigger: 'blur' },
          // { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
          this.$http.post("auth/jwt/token",{"username":this.formValidate.name,"password":this.formValidate.password},res=>{
            localStorage.setItem('token',res.token)
            this.$router.push({path: '/personmanage'});
          },err=>{
          })
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bigbox{
        width: 100%;
        height: 100%;
        background: url("../../public/img/bj.png")no-repeat;
        background-size: 100% 100%;
        position: fixed;
    }
    .flexbox{
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction:column;
        margin-bottom: 40px;
        text-align: center;
    }
    .posibox{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 400px;
        height: 400px;
        padding: 30px;
    }
    .textbox{
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items:center;
        margin-bottom: 20px;
        padding: 0 18px;
    }
    .text{
        font-size: 28px;
        margin-left: 20px;
        color: #fff;
    }

</style>
