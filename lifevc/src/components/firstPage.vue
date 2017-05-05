<template>

      <div class="content" ref="content">
        <div class="new" style="margin-bottom: 50px">
        <!--滚动区域-->
          <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <div>
              <!--轮播图-->
              <div class="banner">
                <div class="swiper-container">

                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner01.jpg">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner02.jpg">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner03.jpg">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner04.jpg">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner05.jpg">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner06.jpg">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <img src="../../static/img/Carousel/banner01.jpg">
                      </a>
                    </div>
                  </div>

                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <!--内容分块-->
              <ul class="combo-wrapper">
                <li class="combo">
                  <div class="img-wrap" style="height: 165px">
                    <!--src="../../static/img/combo/1.jpg"-->
                    <img src="../../static/img/combo/1.jpg" style="width: 100%;;height: 165px">
                    <map name="planetmap0" id="planetmap0">
                      <area shape="rect" coords="0,0,375,165" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 90px">
                    <img src="../../static/img/combo/2.jpg" style="width: 100%;height: 90px">
                    <map name="planetmap1" id="planetmap1">
                      <area shape="rect" coords="0,9,187,100" href="###">
                      <area shape="rect" coords="187,9,375,99" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 660px">
                    <img src="../../static/img/combo/3.jpg" style="width: 100%;height: 660px">
                    <map name="planetmap2" id="planetmap2">
                      <area shape="rect" coords="7,65,363,653" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 915px">
                    <img src="../../static/img/combo/4.jpg" style="width: 100%;height: 915px">
                    <map name="planetmap3" id="planetmap3">
                      <area shape="rect" coords="0,64,375,237" href="###">
                      <area shape="rect" coords="0,237,375,402" href="###">
                      <area shape="rect" coords="0,402,375,576" href="###">
                      <area shape="rect" coords="0,576,123,741" href="###">
                      <area shape="rect" coords="123,576,251,741" href="###">
                      <area shape="rect" coords="251,576,375,741" href="###">
                      <area shape="rect" coords="0,741,123,915" href="###">
                      <area shape="rect" coords="123,741,251,915" href="###">
                      <area shape="rect" coords="251,741,375,905" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 1224px">
                    <img src="../../static/img/combo/5.jpg" style="width: 100%;height: 1224px">
                    <map name="planetmap4" id="planetmap5">
                      <area shape="rect" coords="0,61,187,305" href="###">
                      <area shape="rect" coords="187,61,375,244" href="###">
                      <area shape="rect" coords="0,293,187,477" href="###">
                      <area shape="rect" coords="187,244,375,477" href="###">
                      <area shape="rect" coords="0,464,375,660" href="###">
                      <area shape="rect" coords="0,660,187,856" href="###">
                      <area shape="rect" coords="187,660,375,856" href="###">
                      <area shape="rect" coords="0,844,375,1039" href="###">
                      <area shape="rect" coords="0,1027,187,1223" href="###">
                      <area shape="rect" coords="187,1027,375,1223" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 350px">
                    <img src="../../static/img/combo/6.jpg" style="width: 100%;height: 350px">
                    <map name="planetmap6" id="planetmap6">
                      <area shape="rect" coords="0,38,375,346" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 350px">
                    <img src="../../static/img/combo/7.jpg" style="width: 100%;height: 350px">
                    <map name="planetmap7" id="planetmap7">
                      <area data-v-46782024="" shape="rect" coords="0,38,371,343" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 326px">
                    <img src="../../static/img/combo/8.jpg" style="width: 100%;height: 326px">
                    <map name="planetmap8" id="planetmap8">
                      <area data-v-46782024="" shape="rect" coords="0,38,371,343" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 190px">
                    <img src="../../static/img/combo/9.jpg" style="width: 100%;height: 190px">
                    <map name="planetmap9" id="planetmap9">
                      <area data-v-46782024="" shape="rect" coords="0,1,330,176" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 1357px">
                    <img src="../../static/img/combo/10.jpg" style="width: 100%;height: 1357px">
                    <map name="planetmap10" id="planetmap10">
                      <area data-v-46782024="" shape="rect" coords="0,1,330,176" href="###">
                    </map>
                  </div>
                </li>
                <li class="combo">
                  <div class="img-wrap" style="height: 1362px">
                    <img src="../../static/img/combo/11.jpg" style="width: 100%;height: 1362px">
                    <map name="planetmap11" id="planetmap11">
                      <area shape="rect" coords="7,0,180,272" href="###">
                      <area shape="rect" coords="195,13,367,285" href="###">
                      <area shape="rect" coords="7,258,180,544" href="###">
                      <area shape="rect" coords="191,285,367,558" href="###">
                      <area shape="rect" coords="7,530,180,803" href="###">
                      <area shape="rect" coords="195,544,367,844" href="###">
                      <area shape="rect" coords="11,803,180,1061" href="###">
                      <area shape="rect" coords="195,830,367,1102" href="###">
                      <area shape="rect" coords="7,1061,180,1293" href="###">
                      <area shape="rect" coords="191,1102,367,1347" href="###">
                    </map>
                  </div>
                </li>
              </ul>
            </div>
          </mt-loadmore>
        </div>
      </div>

</template>
<script>
//    import BScroll from 'better-scroll'
    export default{
      data () {
        return {
          allLoaded: false,
          img: '../../static/img/combo/1.jpg',
        }
      },
      mounted () {
//        this._initScroll()
      },
      methods: {
        loadTop() {
          setTimeout(() =>{
            this.$refs.loadmore.onTopLoaded();
          }, 2000)
        },
        loadBottom() {
//          this.allLoaded = true;// 若数据已全部获取完毕
          setTimeout(() => {
            this.$refs.loadmore.onBottomLoaded();
          }, 2000)
        }
//        _initScroll () {
//          setTimeout(() => {
//            if (!this.ContentScroll) {
//              this.ContentScroll = new BScroll(this.$refs.content, {
//                click: true,
//                scrollY: true,
//                scrollX: false
//              })
//            } else {
//              this.ContentScroll.refresh()
//            }
//          }, 100)
//        }
      }
    }
</script>
<style type="text/css" scoped>
  /*content*/
  .content{
    width: 100%;
    margin-top: 8rem;
    margin-bottom: 4rem;
    overflow: hidden;
  }
  /*banner轮播图*/
  .swiper-container{
    width: 100%;
    height: 100%;
  }
  .swiper-slide img{
    width: 100%;
  }
  /*combo*/
  .combo-wrapper{
    width: 100%;
  }
  .combo-wrapper .combo{
    margin-bottom: 1rem;
  }

  .img-wrap{
    background: #eeeeee url(../../static/img/background/small.png) no-repeat 50%;
  }
  .img-wrap img{
    width: 100%;
  }
  image[lazy=loading]{
    width: 100%;
    height: 100%;
  }
</style>
