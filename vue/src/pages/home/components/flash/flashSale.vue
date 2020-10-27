<!--
 * @Descripttion: 限时抢购
 * @version: 
 * @Author: qqqiu
 * @Date: 2019-11-27 15:14:39
 -->
<template>
  <div id='flash-main'>
    <div class="count-down">
          <div class="title">限时抢购</div>
          <!-- vant的倒计时组件 -->
          <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>

        <!-- 抢购图片.. -->
        <div class="flash-icon"><img :src="flashSaleIcon" alt=""></div>
        </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
       // 倒计时时间设置 单位毫秒
        time:60*60*24*1000,  //倒计时一天
        flashSaleIcon:require('@/assets/images/flash/flashSale.png')
    }
  },
  props:{
    FlashFood:Array
  }
}
</script>

<style lang='scss' scoped>
#flash-main{
  padding: 0 0 0 0.5rem;
  background: #F6F6F6;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
}
.count-down{
  display: flex;
  justify-content:start;
  align-items: center;
  //  padding-left:1rem;
}
.title {
  display: inline-block;
  // border-left: 5px #E5017D solid;
  padding: 0 1rem;
  height: 1.5rem;
  vertical-align: middle;
  font-size: 1rem;
  position: relative;
}
.title::before{
  content:'';
  display: block;
  position: absolute;
  top:2px;
  left:0px;
  right:0;
   width: 0px;
  height: 0px;
  border-top: 10px solid transparent;
  border-left: 10px solid #D4237A;
  /*  border-bottom 也可以不设置，因为朝下的箭头是依赖上边框和左边框和右边框的一部分，不包括下边框 */
  /* 颜色可以设置与底部相同的颜色，也可以设置为透明色 */
  /* transparent表示透明 */
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.flash-icon{
  width: 40%;
  height:50%;
  background-size: 100% 100%;
  img{
    width:100%;
  }
}
</style>