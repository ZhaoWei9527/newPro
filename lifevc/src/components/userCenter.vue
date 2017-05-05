<template>
    <div>
        <div class="userCenter">
          <header id="topbar" class="header">
            <div class="header-content">
              <p class="header-title">
                账户中心
              </p>
              <a href="###">
                <span class="editcart">设置</span>
              </a>
            </div>
          </header>
          <div style="margin-top: 4rem">
            <mt-loadmore :top-method="loadTop" ref="loadmore">
              <div class="content-wrapper" ref="content">
                <div>
                  <div class="content">
                    <div class="acct-user-wrap">
                      <div class="acct-nolog">
                        <span class="state">您还未登录</span>
                        <div class="btn-entry">
                          <router-link to="/login" class="font-large">登录</router-link>
                          <span class="split"></span>
                          <a href="###" class="font-large">注册</a>
                        </div>
                      </div>
                    </div>
                    <div class="dashboard-order">
                      <ul>
                        <router-link to="/login">
                          <li>
                            <a href="###">
                                <span class="item-ico">
                                    <span class="iconfont icon-daizhifu"></span>
                                </span>
                              <span class="item-title">待支付</span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a href="###">
                                <span class="item-ico">
                                    <span class="iconfont icon-daifahuo"></span>
                                </span>
                              <span class="item-title">待发货</span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a href="###">
                                <span class="item-ico">
                                    <span class="iconfont icon-daishouhuo"></span>
                                </span>
                              <span class="item-title">待收货</span>
                            </a>
                          </li>
                        </router-link>
                      </ul>
                      <ul>
                        <router-link to="/login">
                          <li>
                            <a href="###">
                    <span class="item-ico">
                        <span class="iconfont icon-daipinglun"></span>
                    </span>
                              <span class="item-title">待评论</span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a href="###">
                    <span class="item-ico">
                          <span class="iconfont icon-yihuifu"></span>
                    </span>
                              <span class="item-title">回复</span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a href="###">
                    <span class="item-ico">
                          <span class="iconfont icon-icontuihuan"></span>
                    </span>
                              <span class="item-title">退换货</span>
                            </a>
                          </li>
                        </router-link>
                      </ul>
                    </div>
                    <div class="dashboard">
                      <ul>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-orders"></span>
                              <span class="item-title">我的订单</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                      </ul>
                      <ul>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-youhui"></span>
                              <span class="item-title">我的优惠券</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-buchongiconsvg07"></span>
                              <span class="item-title">现金积分</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-fapiao"></span>
                              <span class="item-title">关于发票</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                      </ul>
                      <ul>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-mima"></span>
                              <span class="item-title">密码与登录信息</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-jianyiyijian"></span>
                              <span class="item-title">老会员建议</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-kehu"></span>
                              <span class="item-title">客户服务</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-dizhi"></span>
                              <span class="item-title">地址管理</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                        <router-link to="/login">
                          <li>
                            <a>
                              <span class="iconfont icon-shoujiyanzheng"></span>
                              <span class="item-title">手机验证</span>
                              <span class="iconfont icon-qianjin"></span>
                            </a>
                          </li>
                        </router-link>
                      </ul>
                    </div>
                    <div class="acct-logout">
                      <input type="button" value="退出当前账号" class="btn btn-logout">
                    </div>
                  </div>
                </div>
              </div>
            </mt-loadmore>
          </div>
        </div>
    </div>
</template>
<script>
//    import BScroll from 'better-scroll'
    export default{
      data () {
        return {
          allLoaded: false
        }
      },
      created () {
//        this._initScroll()
      },
      methods: {
        loadTop() {
//        ...// 加载更多数据
          setTimeout(() => {
            this.$refs.loadmore.onTopLoaded()
          }, 2000)
        }
//        _initScroll () {
//          setTimeout(() => {
//            if (!this.contentScroll) {
//              this.contentScroll = new BScroll(this.$refs.content, {
//                click: true,
//                scrollY: true
//              })
//            } else {
//              this.contentScroll.refresh()
//            }
//          }, 0)
//        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../static/stylus/userCenter.styl"
</style>
