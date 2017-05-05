<template>
    <div>
      <header id="topbar" class="header">
        <div class="wrap-head">
          <div class="header-Ico"></div>
          <router-link to="/allproduct">
            <a>
             <span class="head-typeimg">

             </span>
            </a>
          </router-link>
        </div>
        <div class="wrap-menuNavNewProduct" ref="menu">
          <ul id="navUL" class="menuNavNewProduct" style="width: 800px;">
            <router-link to="/index/first">
              <li class="font-large selected">
                <a>首页</a>
              </li>
            </router-link>
            <router-link to="/index/newproduct">
              <li class="font-large">
                <a>新品</a>
              </li>
            </router-link>
            <router-link to="/index/items/1">
              <li class="font-large">
                <a>家务</a>
              </li>
            </router-link>
            <router-link to="/index/items/2">
              <li class="font-large">
                <a>下厨</a>
              </li>
            </router-link>
            <router-link to="/index/items/3">
              <li class="font-large">
                <a>家居服</a>
              </li>
            </router-link>
            <router-link to="/index/items/4">
              <li class="font-large">
                <a>生活</a>
              </li>
            </router-link>
            <router-link to="/index/items/5">
              <li class="font-large">
                <a>软装</a>
              </li>
            </router-link>
            <router-link to="/index/items/6">
              <li class="font-large">
                <a>床品</a>
              </li>
            </router-link>
            <router-link to="/index/items/7">
              <li class="font-large">
                <a>工作和旅行</a>
              </li>
            </router-link>

            <router-link to="/index/items/8">
              <li class="font-large">
                <a>了解LifeVC</a>
              </li>
            </router-link>
          </ul>
        </div>
      </header>


      <router-view ref="scrollContent"></router-view>

    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    created () {
      this.lunbo()
      this._initScroll()
    },
    methods: {
      lunbo () {
        this.$nextTick(() => {
          this.swipe = new window.Swiper('.swiper-container', {
            autoplay: 1000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationType: 'bullets',
            autoplayDisableOnInteraction: false
          })
        })
      },
      _initScroll () {
        setTimeout(() => {
          if (!this.menuScroll) {
            this.menuScroll = new BScroll(this.$refs.menu, {
              click: true,
              scrollX: true,
              scrollY: false
            })
          } else {
            this.menuScroll.refresh()
          }
          // 这里传入一个变量，使每一个子路由板块可以随着传过来的变量去绑定
//          if (!this.contentScroll) {
//            还是不能准确的获取当前路由
//            console.log(this.$refs)
//            console.log(this.$refs.scrollContent.$router.currentRoute)
//            this.contentScroll = new BScroll(this.$refs.scrollConetnt.$refs.content, {
//              click: true,
//              scrollY: true,
//              scrollX: false
//            })
//          } else {
//            this.contentScroll.refresh()
//          }
        }, 1000)
      }
    }
  }
</script>
<style type="text/css" scoped>
  html{
    height: 100%;
    font-size: 10px;
  }
  body{
    height: 100%;
    background: #eee;
    font-size: 100%;
    color: #333;
  }

  /*header头部*/
  header{
    padding: 0;
    width: 100%;
    /*background: #88c13e;*/
    position: fixed;
    top: 0;
    z-index: 999;
    margin: auto;
  }
  .header .wrap-head{
    width: auto;
    height: 4rem;
    background: #88c13e;
  }
  .wrap-head .header-Ico{
    display: block;
    width: 100%;
    height: 4rem;
    background: url(../../static/img/header/headerback.png) no-repeat;
    background-size: 50%;
    background-position: 50%;
  }

  .head-typeimg{
    display: block;
    width: 3.8rem;
    height: 3.8rem;
    float: right;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    background-size: 45%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMA4yl4B/GrYh8P+rKFLyQF58acfnvWu2peNvXt6d/e2NDOoJlyWUtDPBcUjkxLpL4AAAEgSURBVDjL5dLHcoMwFIVhCdEJHffeS/73f77g0XiMQbZZJKt8K3TmoGEuV/yCq3/9XLLHkQM40dh+2ztI7uThdS0tuHEWDjdFqmNL8iCtOnGBeZXUT0k1B1xdVDQpHbiB0AJXh4Yb/RAK8VBA6AuDHazT5hevYWcajAOnp+QEjmFIZ1i2oiWcu8URbFvRFkbdYglfregLym6xMharbtEDtxW54HWLMczs5znMIBZdsv2+B1IYlJBdGudLBqWpGGSQB49jDll9NDgCq4nQJivg+GLN9gBDL/ZjbwiwN69ZbTylYSPMi3uTRNyFMBJvJCoaLAaRSr5haoke7AFs0j7NONR//zMF4aRXcwiqV9HPc1/8V5bkPWndB/+J6n/jn/gBNys8rIWO1DgAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: 50%;

  }
  .wrap-menuNavNewProduct{
    position: absolute;
    z-index: 1100;
    background: #fff;
    width: 100%;
    overflow: hidden;
  }
  .menuNavNewProduct{
    width: 800px;
    height: 4rem;
    float: left;
    box-sizing: border-box;
    line-height: 48px;
  }
  .menuNavNewProduct li{
    width: 80px;
    text-align: center;
    float: left;
    height: 4rem;
    box-sizing: border-box;
  }
  .menuNavNewProduct .active li{
    border-bottom: 2px solid #88c13e;
  }
  .menuNavNewProduct .active li a{
    color: #88c13e;
  }
  .menuNavNewProduct li a{
    height: 3.8rem;
    display: block;
    line-height: 3.8rem;
    padding: 0;
    position: relative;
    font-size: 1.35rem;
    color: black;

  }
</style>
