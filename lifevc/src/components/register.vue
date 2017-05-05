<template>
  <div class="login-wrapper">
    <div class="old_user_login">
      <router-link to="/usercenter">
        <span class="iconfont icon-return"></span>
      </router-link>
      <img src="../img/login/login.png" alt="" class="acct_top_show">
    </div>
    <div class="bg-wrap">
      <div class="login_content">
        <h1>新用户注册</h1>
        <div id="wrap">
          <!--登录切换-->
          <form action="" id="register-form">
            <ul class="fm_list">
              <li class="multi">
                <input  required="required" type="tel" maxlength="11"
                        placeholder="请输入手机号" class="field_ipt" ref="number">
              </li>
              <li>
                <input data-v-4e187200="" type="text" maxlength="20" ref="psw"
                       placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required" class="field_ipt">
              </li>
              <li>
                <input required="required" type="text" maxlength="4" id="regCaptcha"
                       placeholder="请输入图形验证码" class="field_ipt" ref="regCaptcha">
                <div class="verifycode_img">
                  <img :src="pic.src" alt="">
                  <img src="../img/register/refresh.png" alt="" @click="getPic">
                </div>
                <!--提醒框-->
                <span class="numberHint" v-show="numberHint" ref="numberHint"></span>
              </li>
              <li>
                <input  type="text" placeholder="请输入手机验证码" maxlength="10"
                        id="regSmsCaptcha" required="required" class="field_ipt" ref="regSmsCaptcha">
                <a class="fidld_skip" @click="getcode">获取验证码</a>
              </li>
            </ul>
            <p >遇到问题？请<a href="tel:400-609-2288">联系客服</a></p>
          </form>
          <router-link to="/register">
            <input data-v-4e187200="" type="button" value="注册" class="btn_login" @click="toRegister">
          </router-link>
          <router-link to="/login">
            <input data-v-4e187200="" type="button" value="登录" class="btn_regisiter" >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      props: ['toggleFooter'],
      data () {
        return {
          numberHint: false,
          pic: {}
        }
      },
      created () {
        // 初始化隐藏底部
        this.footerHide()
        this.getPic()
      },
      methods: {
        footerHide () {
          this.toggleFooter(false)
        },
        // 注册时获取手机验证码
        getcode () {

          // 判断用户输入是否合法
          const number = this.$refs.number.value.trim()
          const regCaptcha = this.$refs.regCaptcha.value
          const psw = this.$refs.psw.value
          if (!number) {
            this.number = ''
            this.$refs.numberHint.innerHTML = '请先输入手机号'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }

          if (isNaN(number) || number.length < 11 || number.charAt(1) <3) {
            this.number = ''
            this.$refs.numberHint.innerHTML = '请输入正确的手机号'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }
          if (number && !regCaptcha) {
            this.$refs.numberHint.innerHTML = '请先输入图形验证码'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }
          if (number && regCaptcha && (regCaptcha.toLowerCase() !== this.pic.text)) {
            console.log(regCaptcha.toLowerCase())
            this.$refs.numberHint.innerHTML = '您的图形验证码有误，请确认后重新输入'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          } else {
            console.log('去发送验证码了')
            const url = 'http://localhost:3000/getCode'
            this.$http.get(url)
              .then((response) => {
                console.log(response.body)
              })
            return
          }

        },

        // 去注册
        toRegister () {
          const number = this.$refs.number.value.trim()
          const regCaptcha = this.$refs.regCaptcha.value
          const psw = this.$refs.psw.value
          const regSmsCaptcha = this.$refs.regSmsCaptcha.value
          if (!number) {
            this.number = ''
            this.$refs.numberHint.innerHTML = '请先输入手机号'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }
          if (isNaN(number) || number.length < 11 || number.charAt(1) <3) {
            this.number = ''
            this.$refs.numberHint.innerHTML = '请输入正确的手机号'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }
          if (number && !psw ) {
            this.$refs.numberHint.innerHTML = '请设置有效密码'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }

          if (number && !regCaptcha) {
            this.$refs.numberHint.innerHTML = '请先输入图形验证码'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          }
          if (!regSmsCaptcha) {
            this.$refs.numberHint.innerHTML = '请先输入手机验证码'
            this.numberHint = true
            setTimeout(() => {
              this.numberHint = false
            }, 3000)
            return
          } else {
            const url = `http://localhost:3000/register/?number=${number}&psw={psw}&regSmsCaptcha=${regSmsCaptcha}`
            console.log('去注册')
            this.$http.get(url)
              .then((response) => {
                this.$refs.numberHint.innerHTML = response.body
                this.numberHint = true

                setTimeout(() => {
                  this.numberHint = false
                }, 3000)
              })
          }


        },

        // 随机获取图片验证
        getPic () {
          console.log('aaa')
          const url = 'http://localhost:3000/getPicter'
          this.$http.get(url)
            .then((response) => {
              console.log(response.body)
              this.pic = response.body
            })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-wrapper
    width 100%
    background-color #eee
    .old_user_login
      width 100%
      height 141px
      background-color #fff
      position relative
      .icon-return
        width 26px
        height 26px
        display block
        border-radius: 50%;
        position absolute
        left 15px
        top 46px
        border 1px solid #3aad36
        color #3aad36
        font-size 30px
        line-height 26px
        padding-left  -2px
      .acct_top_show
        width 120px
        display block
        position absolute
        top 30%
        left 50%
        margin-left -60px
    .bg-wrap
      width 100%
      height 526px
      background url("../img/login/1.jpg") no-repeat
      background-size 100% 100%
      background-position bottom
      .login_content
        width 100%
        height 325px
        box-sizing border-box
        h1
          width 100%
          text-align center
          color #037049
          line-height 55px
          box-sizing border-box
          font-size 20px
        #wrap
          #register-form
            .fm_list
              margin-bottom 10px
              box-sizing border-box
              li
                width 90%
                margin 0 auto
                height 50px
                border-bottom  1px solid #dbdbdb
                position relative
                .field_ipt
                  font-size 16px
                  width 100%
                  background transparent
                  position absolute
                  top 0
                  left 0
                  height 50px
                  box-sizing border-box
                  outline none
                .numberHint
                  display inline-block
                  width 150px
                  /*height 38px*/
                  background-color #333333
                  line-height 38px
                  text-align center
                  position absolute
                  top 39px
                  left 113px
                  font-size 14px
                  border-radius 11%
                  color #ffffff
                  z-index 99
                  padding 0 10px
                .verifycode_img
                  position absolute
                  right -70%
                  width 100%
                  height 66px
                  top -6px
                  line-height 66px
                  :first-child
                    width 20%
                    border 0px solid silver
                    vertical-align middle
                    margin-right 10px
                  :last-child
                    width 5%
                    vertical-align middle
                a
                  display inline-block
                  float right
                  font-size 16px
                  color #3aad36
                  border 1px solid #3aad36
                  border-radius 4px
                  padding 7px 15px
                  text-align center
                  position absolute
                  top 10px
                  right 0
            p
              font-size 14px
              color #666
              width 100%
              text-align center
              margin-bottom 10px
              a
                color #3ea438
                text-decoration underline
          .btn_login
            width 80%
            display block
            text-align center
            font-size 19px
            color #ffffff
            line-height 36px
            letter-spacing 20px
            text-indent 20px
            box-sizing border-box
            margin 0 auto 15px
            background-color #3aad36
            border 1px solid #3aad36
            border-radius 5px
            outline none
          .btn_regisiter
            margin 10px auto 0
            background-color #8a8a8a
            border 1px solid #8a8a8a
            border-radius 5px
            font-size 19px
            opacity .5
            width 80%
            display block
            text-align center
            color #ffffff
            line-height 36px
            letter-spacing 20px
            text-indent 20px
            box-sizing border-box
            outline none
</style>
