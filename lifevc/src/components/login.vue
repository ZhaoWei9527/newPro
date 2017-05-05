<template>
    <div>
      <div id="login-wrap">
        <div class="old_user-login">
          <router-link to="/usercenter">
            <span class="iconfont icon-return"></span>
            <img src="../../static/img/login/login.png"/>
          </router-link>
        </div>
        <div class="bg-wrap">
          <div class="login-content">
            <h1>老用户登录</h1>
            <div id="wrap">
              <div v-show="isPhoneLogin">
                <form id="reset-form">
                  <ul class="fm_list">
                    <li class="multi">
                      <input type="tel" placeholder="请输入手机号" class="field_ipt">
                      <a class="fidld_skip">获取验证码</a>
                    </li>
                    <li>
                      <input type="text" id="loginVerifyCode" class="field_ipt" placeholder="请输入手机验证码">
                    </li>
                  </ul>
                  <div class="set_link">
                    <p class="problem">
                      遇到问题？请
                      <a href="###">联系客服</a>
                    </p>
                    <a @click="toggleLogin">
                      <span>账号密码登录</span>
                      <span class="iconfont icon-qianjin"></span>
                    </a>
                  </div>
                </form>
              </div>
              <div v-show="!isPhoneLogin">
                <form id="login-form">
                  <ul class="fm_list">
                    <li>
                      <input type="tel" placeholder="请输入手机号" class="field_ipt" v-model="userName">
                    </li>
                    <li class="multi">
                      <input type="password" placeholder="请输入登录密码" class="field_ipt" v-model="password">
                      <a href="###" class="fidld_skip">忘记密码</a>
                    </li>
                  </ul>
                  <div id="setting" class="set_link">
                    <a @click="toggleLogin">
                      <span>手机号快捷登陆</span>
                      <span class="iconfont icon-qianjin"></span>
                    </a>
                  </div>
                </form>
              </div>
              <input type="button" value="登录" class="btn_login" @click="login">
              <input type="button" value="注册" class="btn_regisiter">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
      data () {
        return {
          isPhoneLogin: true,
          userName: '',
          password: ''
        }
      },
      methods: {
        toggleLogin () {
          this.isPhoneLogin = !this.isPhoneLogin
        },
        login () {
          var userName = this.userName.trim()
          var password = this.password.trim()
          if (userName && password){
            this.$http.get(`http://192.168.21.221:3000/login/?userName=${userName}&&password=${password}`)
              .then(response => {
                console.log(response)
              })
          }
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../static/stylus/login.styl"
</style>
