<template>
    <div>
      <div class="container">
        <header id="topbar" class="header">
          <div class="header-content">
            <span class="iconfont icon-return"></span>
            <span class="header-title">购物车</span>
          </div>
          <div class="header-login-wrap">
            <div class="header-login">
              <a href="###" class="btn-login">登录</a>
              <span class="login-tip">你可以在登陆后同步电脑与手机购物车中的商品</span>
            </div>
          </div>
        </header>
        <div class="wrap-content">
          <div class="page-loadmore-wrapper">
            <input type="text" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
            <input type="button" value="兑换" class="exch-btn">
          </div>
          <div id="wrap-nodata">
            <div class="carts-img">
              <img src="../../static/img/shopCart/shopcart.png">
            </div>
            <div class="cartText">
              <p>您的购物车还是空荡荡的</p>
            </div>
            <div class="carts-link">
              <a href="###">赶紧去逛逛</a>
            </div>
            <div class="wrap-cart-assem">
              <div class="cart-assem-title">
                <p>Rico.S为你精心推荐</p>
              </div>
              <div class="cart-assem-list" ref="list">
                <ul>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/1.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/2.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/3.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/4.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/5.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/6.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/7.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/8.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/9.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/10.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/11.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/12.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/13.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/14.gif">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/15.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/16.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/17.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/18.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="cart-assem-item">
                      <a href="###">
                        <img src="../../static/img/shopCart/19.jpg">
                      </a>
                      <p class="title">天然樟脑防蛀防霉片（30片装）</p>
                      <p class="price">
                        ￥15
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default{
      created () {
        this._initScroll()
      },
      methods: {
        _initScroll () {
          setTimeout(() => {
            if (!this.listScroll) {
              this.listScroll = new BScroll(this.$refs.list, {
                click: true,
                scrollX: true,
                scrollY: false
              })
            }
          }, 100)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../static/stylus/shopcart.styl"
</style>
