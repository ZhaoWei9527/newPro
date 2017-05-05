<template>
    <div style="margin-top: 9rem;margin-bottom: 5rem;">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="wrap-shelf" ref="content">
        <div>
          <div class="subcat-title">最近一周新品</div>
          <div class="shelf-item">
            <a class="item-pic-bx">
              <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/9f30500d0b1e4e0cb4c172018c18e4fc_d1242x0.jpg">
              <div class="item-status" style="display: block">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">电热蚊香液</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥5</span>
                  <span class="original-price">￥99</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a class="item-pic-bx">
              <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/9f30500d0b1e4e0cb4c172018c18e4fc_d1242x0.jpg">
              <div class="item-status" style="display: block">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">电热蚊香液</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥5</span>
                  <span class="original-price">￥99</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a class="item-pic-bx">
              <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/9f30500d0b1e4e0cb4c172018c18e4fc_d1242x0.jpg">
              <div class="item-status" style="display: block">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">电热蚊香液</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥5</span>
                  <span class="original-price">￥99</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a class="item-pic-bx">
              <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/9f30500d0b1e4e0cb4c172018c18e4fc_d1242x0.jpg">
              <div class="item-status" style="display: block">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">电热蚊香液</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥5</span>
                  <span class="original-price">￥99</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </mt-loadmore>
    </div>
</template>
<script>
    export default{
      data () {
        return {
          allLoaded: false
        }
      },
      methods: {
        loadTop() {
          setTimeout(() => {
            this.$refs.loadmore.onTopLoaded();
          }, 2000)
        },
        loadBottom() {
//          this.allLoaded = true;// 若数据已全部获取完毕
          setTimeout(() => {
            this.$refs.loadmore.onBottomLoaded();
          }, 2000)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap-shelf
  width 100%
  /*margin-top 2rem*/
  /*margin-bottom 0*/
  /*padding 7rem 0 0*/
  .subcat-title
    max-width 96%
    text-align center
    font-size 1.9rem
    color #000000
    line-height 2rem
    margin 0 auto -1.2rem
  .shelf-item
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
        z-index 5
      .item-status
        width 7rem
        height 7rem
        background-color rgba(0,0,0,.6)
        border-radius 50%
        text-align center
        vertical-align middle
        font-size 1.5rem
        color 1.5rem
        line-height 7rem
        font-weight 700rem
        position absolute
        left 50%
        top 50%
        margin-top -4rem
        margin-left -3.5rem
    .item-panel
      width 100%
      background-color #ffffff
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
      .clearFix:before
        content ""
        display table
      .clearFix:after
        clear both
        overflow hidden
        content ""
        display table
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
          .original-price
            color #cccccc
            text-decoration line-through
          .act-tag
            background-color #fff000
            display inline-block
            padding 1px 3px
          .promo-lable
            background-color #c00
            color #ffffff
            display inline-block
            padding 1px 3px

        .item-comment
          float right
          text-align right
          color #999999
</style>
