<template>
    <div>
      <div id="all-container">
        <header id="topbar" class="header">
          <div class="header-content">
            <p class="header-title">
              全部产品
            </p>
          </div>
          <div id="wrap" class="search-panel">
            <div id="search-bar">
              <form>
                <input type="search" class="searchinput" placeholder="搜索商品">
                <input type="button" value="取消" class="sch-cancel" id="btnCancel">
              </form>
            </div>
          </div>
        </header>

        <div id="content-wrap" ref="contentWrap">
          <div class="life-module">
            <div class="life-goodsAll">
              <div class="life-goodsBox">
                <div class="life-goodsTip">
                  <dl class="life-goodsMask">家务</dl>
                </div>
                <ul class="life-goodsUl clearFix onlyStyle">
                  <li>
                    <img src="../../static/img/allProduce/1.jpg">
                    <dl>家务工具</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/2.jpg">
                    <dl>家庭清洁工具</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/3.jpg">
                    <dl>防霉除菌</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/4.jpg">
                    <dl>衣物收纳</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/5.jpg">
                    <dl>百纳箱</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/6.jpg">
                    <dl>生活必备</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/7.jpg">
                    <dl>酵素洗衣液</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/8.jpg">
                    <dl>魔力挂钩</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/9.jpg">
                    <dl>地毯地垫</dl>
                  </li>
                </ul>
              </div>
              <div class="life-goodsBox">
                <div class="life-goodsTip">
                  <dl class="life-goodsMask">下厨</dl>
                </div>
                <ul class="life-goodsUl clearFix onlyStyle">
                  <li>
                    <img src="../../static/img/allProduce/10.jpg">
                    <dl>厨房小帮手</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/11.jpg">
                    <dl>不粘锅</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/12.jpg">
                    <dl>厨房电器</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/13.jpg">
                    <dl>水壶水杯</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/14.jpg">
                    <dl>餐具</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/15.jpg">
                    <dl>多功能锅</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/16.jpg">
                    <dl>保温锅</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/17.jpg">
                    <dl>刀具</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/18.jpg">
                    <dl>净水器</dl>
                  </li>
                  <li>
                    <img src="../../static/img/allProduce/18.jpg">
                    <dl>闷烧罐</dl>
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
//    import BScroll from 'better-scroll'
    export default{
      created () {
//        this._initScroll()
      },
      methods: {
//        _initScroll () {
//          setTimeout(() => {
//            if (!this.contentScroll) {
//              this.contentScroll = new BScroll(this.$refs.contentWrap, {
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
<style type="text/css" scoped>
  @import "../../static/css/allProducts.css";
</style>
