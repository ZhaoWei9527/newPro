<template>
  <div>
    <router-view></router-view>
    <footer id="bottombar" class="footer" v-if="$route.fullPath !== '/login'">
      <ul id="footermenuNav">
        <li>
          <router-link to="/index" keep-alive>
            <div class="iconfont icon-shouyeshouye2"></div>
            <span class="lispan">首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/allproduct">
            <div class="iconfont icon-quanbu"></div>
            <span class="lispan">全部产品</span>
          </router-link>
        </li>
        <li>
          <router-link to="/hangout" >
            <div class="iconfont icon-zhinanzhen"></div>
            <span class="lispan">闲逛</span>
          </router-link >
        </li>
        <li>
          <router-link to="/shopcart" >
            <div class="iconfont icon-gouwuchenor"></div>
            <span class="lispan">购物车</span>
          </router-link>
        </li>
        <li>
          <router-link to="/usercenter" >
            <div class="iconfont icon-me_line"></div>
            <span class="lispan">账户中心</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped type="text/css">
  /*主题色88c13e*/
  /*公共样式*/
  html{
    font-size: 10px;
  }
  body {
    background: #eee;
    color: #333;
  }

  footer{
    padding: 0;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    z-index: 900;
    width: 100%;
    background: #f8f8f8;
    border-top: 0.04rem solid #ddd;
  }
  #footermenuNav{
    width: 100%;
    height: 4.5rem;
    display: flex;
  }
  #footermenuNav li{
    flex:1;
    text-align: center;
    font-size: 1.1rem;
  }
  #footermenuNav li a{
    display: block;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #footermenuNav li a div{
    font-size: 21px;
  }
  #footermenuNav li .active{
    color: #88c13e;
  }
</style>
