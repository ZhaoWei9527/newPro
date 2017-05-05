<template>
    <div>
      <div class="main-body-shelf">
        <div class="content">
          <ul id="blockcartegory" class="life-goodUl clearFix life-child-thank">
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
            <li>
              <a href="###">
                <img src="../../static/img/items/1.jpg" />
                <dl>家务工具</dl>
              </a>
            </li>
          </ul>
          <div id="category-banner" class="category-banner">
            <img src="../../static/img/items/big.jpg" class="item-pic">
          </div>
          <div id="ceoRecommend" class="wrap-shelf">
            <div class="subcat-title">Rico.s的精心推荐</div>
            <div class="shelf-item">
              <a class="item-pic-bx">
                <img src="../../static/img/items/list/1.jpg" class="item-pic">
                <div class="item-status">热卖脱销</div>
              </a>
              <div class="item-panel">
                <div class="title clearFix">电热蚊香液</div>
                <div class="item-price">
                  <div class="price-cont">
                    <span class="act-tag">新品首发优惠</span>
                    <span>￥15</span>
                    <span class="original-price">￥20</span>
                    <span class="promo-lable">新</span>
                  </div>
                  <div class="item-comment">评论：2</div>
                </div>
              </div>
            </div>
            <div class="shelf-item">
              <a class="item-pic-bx">
                <img src="../../static/img/items/list/1.jpg" class="item-pic">
                <div class="item-status">热卖脱销</div>
              </a>
              <div class="item-panel">
                <div class="title clearFix">电热蚊香液</div>
                <div class="item-price">
                  <div class="price-cont">
                    <span class="act-tag">新品首发优惠</span>
                    <span>￥15</span>
                    <span class="original-price">￥20</span>
                    <span class="promo-lable">新</span>
                  </div>
                  <div class="item-comment">评论：2</div>
                </div>
              </div>
            </div>
            <div class="shelf-item">
              <a class="item-pic-bx">
                <img src="../../static/img/items/list/1.jpg" class="item-pic">
                <div class="item-status">热卖脱销</div>
              </a>
              <div class="item-panel">
                <div class="title clearFix">电热蚊香液</div>
                <div class="item-price">
                  <div class="price-cont">
                    <span class="act-tag">新品首发优惠</span>
                    <span>￥15</span>
                    <span class="original-price">￥20</span>
                    <span class="promo-lable">新</span>
                  </div>
                  <div class="item-comment">评论：2</div>
                </div>
              </div>
            </div>
          </div>
          <div id="wrap_shelf_nav" class="wrap-shelf-navs clearFix">
            <div class="wrap_shelf_nav_sort">
              <ul class="life-sort has-filter clearFix">
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>畅销</a>
                </li>
                <li>
                  <a class="newSellingPrice">
                    <em>价格</em>
                    <i class="up"></i>
                  </a>
                </li>
                <li @click="toggleMask">
                  <a>
                    <em>需求筛选</em>
                    <span class="filter"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="categoryPopubg" class="bg" v-show="isShow" @click="toggleMask"></div>
          <div class="mint-popup mint-popup-3 filter-popup mint-popup-right"
                style="z-index: 2008" v-show="isShow">
            <div>
              <header id="topbar" class="header">
                <div class="header-content">
                  <p class="header-title">筛选</p>
                </div>
              </header>
            </div>
            <article>
              <div style="overflow: hidden;padding: 1.5rem 1rem 0">
                <ul>
                  <li class="cur">
                    <span>全部家务产品</span>
                  </li>
                </ul>
              </div>
              <div  style="overflow: hidden;padding: 1.5rem 1rem 0;border-top: 1px solid rgb(232, 232, 232)">
                <ul>
                  <li>
                    <span>家务工具</span>
                  </li>
                  <li>
                    <span>家庭清洁剂</span>
                  </li>
                  <li>
                    <span>防霉除菌</span>
                  </li>
                  <li>
                    <span>衣物收纳</span>
                  </li>
                  <li>
                    <span>百纳箱</span>
                  </li>
                  <li>
                    <span>生活必备</span>
                  </li>
                  <li>
                    <span>酵素洗衣液</span>
                  </li>
                  <li>
                    <span>魔力挂钩</span>
                  </li>
                  <li>
                    <span>地毯地垫</span>
                  </li>
                </ul>
              </div>
              <div  style="width: 91%;position: absolute;bottom: 0px;border-top: 1px solid rgb(232,232,232)">
                <button class="btn font-medium radiu35"
                style="width: 40%; padding: 0.5rem 0px; background: rgb(255, 255, 255); color: rgb(102, 102, 102); border: 1px solid rgb(102, 102, 102);">清空筛选</button>
                <button class="btn font-medium radiu35"
                style="width: 40%; padding: 0.5rem 0px; background: rgb(16, 177, 34);" @click.stop="toggleMask">确定</button>
              </div>
            </article>
          </div>


          <div class="shelf-item">
            <a class="item-pic-bx">
              <img src="../../static/img/items/list/1.jpg" class="item-pic">
              <div class="item-status">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">电热蚊香液</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥15</span>
                  <span class="original-price">￥20</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：2</div>
              </div>
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
          isShow: false
        }
      },
      methods: {
        toggleMask () {
          this.isShow = !this.isShow
        }
      }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  html
    font-size 10px
  .main-body-shelf
    margin-top 8.5rem
    width 100%
    padding-bottom 4.5rem
    background-color #eeeeee
    color #2e2e2e
    display block
    .content
      background-color #eeeeee
      .life-goodUl
        background-color #ffffff
        overflow hidden
        li
          float left
          text-align center
          width 25%
          margin 1rem 0
          a
            display block
            color #333333
            img
              width 80%
              max-width 100%
              margin 0 auto
              vertical-align middle
            dl
              height 2rem
              line-height 2rem
              font-size 1.3rem
              text-align center
      .clearFix:before,.clearFix:after
        content ""
        display table
      .clearFix:after
        clear both
        display table
      .category-banner
        width 100%
        margin 1.5rem auto 0
        img
          width 100%
          display block
          vertical-align top
        .item-pic
          position relative
          z-index 5
      .wrap-shelf
        width 100%
        margin -3rem auto 2rem
        padding 4rem 0 0
        .subcat-title
          max-width 96%
          text-align center
          font-size 1.9rem
          color #000000
          line-height 2.5rem
          margin 0 auto -1.2rem
      .shelf-item
        position relative
        width 96%
        border 1px solid #dddddd
        margin 2rem auto 0
        .item-pic-bx
          width 100%
          overflow hidden
          display block
          position relative
          .item-pic
            width 100%
            display block
            vertical-align top
            margin 0 auto
            position static
          .item-status
            width 7rem
            height 7rem
            background-color rgba(0,0,0,.6)
            border-radius 50%
            font-size 1.5rem
            color #ffffff
            line-height 7rem
            font-weight 700
            position absolute
            left 50%
            top 50%
            margin-top -4rem
            margin-left -3.5rem
            text-align center
        .item-panel
          width 100%
          background #ffffff
          color #333333
          padding-bottom .3rem
          overflow hidden
          font-size 1.35rem
          line-height 2.6rem
          .title
            width 94%
            overflow hidden
            margin 0 auto
            text-align left
            font-size 1.35rem
            color #333333
            line-height 2.6rem
            text-overflow ellipsis
            white-space nowrap
            padding-top .5rem

          .item-price
            width 94%
            overflow hidden
            margin 0 auto
            .price-cont
              min-width 68%
              overflow hidden
              float left
              line-height 1.8rem
              margin-top .2rem
              .act-tag
                background-color #fff000
                padding 1px 3px
              .original-price
                color #cccccc
                text-decoration line-through
              .promo-lable
                background-color #c00
                color #ffffff
                display inline-block
                padding 1px 3px


            .item-comment
              float right
              text-align right
              color #999999
      .wrap-shelf-navs
        display block
        width 100%
        z-index 10
        height 3rem
        .wrap_shelf_nav_sort
          width 100%
          z-index 105
          position relative
          top 0
          .has-filter
            li
              width 25%
          .life-sort
            padding .4rem 2%
            background #ffffff
            border-bottom 1px solid #f2f2f2
            li
              float left
              height 3rem
              line-height 3rem
              .newSellingPrice
                color #c00
              a
                display block
                position relative
                height 1.4rem
                line-height 1.4rem
                border-right 1px solid #f2f2f2
                text-align center
                margin-top .8rem
                font-size 1.35rem
                color #666666
                em
                  padding-right 12px
                  font-style normal
                i
                  width 1rem
                  height 1rem
                  display inline-block
                  position relative
                .down
                  top -2rem
                  transform rotate(135deg)
                  content ""
                  width .4rem
                  height .4rem
                  border-top 1px solid #c00
                  border-right 1px solid #c00
                  right -.2rem
                .up
                  content ""
                  width .4rem
                  height .4rem
                  border-top 1px solid #c00
                  border-right 1px solid #c00
                  right -.2rem
                  top -.12rem
                  transform rotate(-45deg)
                .filter
                  width 1rem
                  height 1rem
                  display inline-block
                  position absolute
                  top .2rem
                  right .1rem
                  background url(../../static/img/items/filter.png) no-repeat
                  background-position 0 0
                  background-size 100%
          .clearFix:before,.clearFix:after
            content ""
            display table
          .clearFix:after
            clear both
            display table

      .bg
        z-index 1009
        opacity .6
        background-color #000000
        height 100%
        position fixed
        width 100%
        left 0
        overflow hidden
        top 0
      .filter-popup
        ul
          li
            float left
            padding .5rem 2%
            border 1px solid #cccccc
            color #666666
            margin 0 2% 1.5rem
            width 21.2%
            text-align center
          .cur
            border 1px solid #89be48
            span
              color #89be48
      .mint-popup
        position fixed
        background #ffffff
        top 50%
        left 50%
        transform translate3d(50%, 50%, 0)
        transition .2s ease-out
        header
          padding 0
          width 100%
          background #89be48
          position fixed
          top 0
          z-index 999
          margin auto
          .header-content
            margin 0 auto
            width 100%
            position relative
            .header-title
              margin 0 auto
              line-height 4rem
              font-size 2rem
              text-align center
              color #ffffff
              width 80%
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
      .mint-popup-right
        top 50%
        right 0
        bottom auto
        left auto
        transform translate3d(0, -50%, 0)
      .mint-popup-3
        z-index 1010
        width 100%
        height 100%
        background-color #ffffff
        left 10%
        right auto
      article
        width 100%
        margin 0 auto
        margin-top 4rem
        padding-bottom 4.5rem
        color #2e2e2e
        display block

      .radiu35
        border-radius .35rem
      .font-medium
        font-size 1.35rem
        line-height 2.6rem
      .btn
        color #ffffff
        font-size 1.6rem
        width 88%
        margin-top 20px
        margin-left 6%
        border none
        margin-bottom 20px
        line-height 2.2rem

</style>
