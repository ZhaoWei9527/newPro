<template>
    <div v-if="currentList.length !== 0">
<!--style="margin-top: 40px;margin-bottom: 50px"-->
        <div class="hangOut-wrapper">
          <header id="topbar" class="header">
            <div class="header-content">
              <p class="header-title">闲逛</p>
            </div>
          </header>
          <div style="margin-top: 40px;">
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                         :bottom-all-loaded="allLoaded" ref="loadmore"
                         :auto-fill="false"
                         @top-status-change="handleTopChange">
              <div class="content" ref="content">
                <div>
                  <!--
                  v-infinite-scroll="loadMore"
                      infinite-scroll-disabled="loading"
                      infinite-scroll-distance="10"
                  -->
                  <ul class="stroll-all-item">
                    <li class="stroll-item" v-for="(item, index) in currentList">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img v-lazy="item.url" class="stroll-item-img" />
                          <span class="tag-new">{{item.isNew}}</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="###">{{item.title}}</a>
                        </h3>
                        <div class="stroll-price-bar">
                        <span class="price">
                           ￥<em>{{item.price}}</em>
                            <span class="original" v-if="item.oldPrice">
                                ￥{{item.oldPrice}}
                            </span>
                        </span>
                          <span class="comment">月销{{item.comment}}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="stroll-all-item" >
                    <li class="stroll-item">
                      <div class="cat-menu-a">
                        <span>新价格</span>
                      </div>
                      <div class="cat-menu-a">
                        <span>今日新品</span>
                      </div>
                    </li>
                    <li class="stroll-item" v-for="(item, index) in currentList">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img :src="item.url" class="stroll-item-img">
                          <span class="tag-new">{{item.isNew}}</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="###">{{item.title}}</a>
                        </h3>
                        <div class="stroll-price-bar">
                        <span class="price">
                           ￥<em>{{item.price}}</em>
                            <span class="original" v-if="item.oldPrice">
                                ￥{{item.oldPrice}}
                            </span>
                        </span>
                          <span class="comment">月销{{item.comment}}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
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
          allLoaded: false,
          listLeft: [],
          loading: false,
          currentList: []
        }
      },
      created () {
//        this._initScroll()
        this.$http.get('/api/listleft')
          .then(response => {
//            console.log(response.body)
            const result = response.body
            if (result.errno == 0) {
              this.listLeft = result.data
              this.currentList = this.listLeft.slice(0, 2)
            }
          })

      },
      methods: {
        loadTop() {
//        ...// 加载更多数据
          setTimeout(() => {
            this.$refs.loadmore.onTopLoaded()
          }, 2000)
        },
        loadBottom() {
//        ...// 加载更多数
//
          console.log('loadBottom');
          console.log(this.listLeft)
          setTimeout(() => {
            const arr = this.listLeft.slice(this.currentList.length-1, this.currentList.length-1+3)
            if (this.currentList.length > this.listLeft.length) {
               this.allLoaded = true;// 若数据已全部获取完毕
            }
            this.currentList.push(...arr)

//            const height = this.$refs.loadmore.offsetHeight
            this.$refs.loadmore.onBottomLoaded()
//            document.getElementsByClassName('hangOut-wrapper').setAttribute('margin-bottom', '50px')
          }, 2000)
        },
        handleTopChange(status) {
          this.topStatus = status;
        },

//        loadMore() {
//          this.loading = true;
////          console.log(Math.round(Math.random()*15))
//          setTimeout(() => {
////            let last = this.listLeft[Math.round(Math.random()*15)]
//            for (let i = 0; i <= 2; i++) {
//              this.listLeft.push(this.listLeft[Math.round(Math.random()*15)])
//            }
//            this.loading = false
//          }, 2000);
//        }
//        _initScroll () {
//          setTimeout(() => {
//            if (!this.contentScroll) {
//              this.contentScroll = new BScroll(this.$refs.content, {
//                click: true,
//                scrollX: false,
//                scrollY: true
//              })
//            } else {
//              this.contentScroll.refresh()
//            }
//          },100)
//        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../static/stylus/hangOut.styl"
</style>
