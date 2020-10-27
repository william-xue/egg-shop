<!--
 * @Descripttion:  分类搜索模块
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-12-25 10:12:51
 * @LastEditors  : sueRimn
 * @LastEditTime : 2019-12-31 16:29:05
 -->
<template>
   <div id='search-main'>
       <div class='search' v-if='searchFlag'>
           <div class="search-header">
                <svg-icon iconClass="back" style='width:2rem;height:2rem' class="back" v-show='isIcon' @click="handleBack"></svg-icon>
         <van-search placeholder="请输入搜索关键词" shape="round" v-model="value" @click="handleClick" />
       <!-- <input type="text" @click="handleClick" class="searchInp" placeholder="请搜索"> -->
         </div>
       </div>
       <!-- 更多搜索 -->
       <div class="search-content" v-else > 
            <van-search
                    v-model="searchConent"
                    placeholder="请输入搜索关键词"
                    show-action
                    shape="round"
                    @search="onSearch"
                    @cancel="onCancel"
                    @click='onClick'
                >
                  <div slot="action" @click="onSearch">搜索</div>
                </van-search>
                   <!-- 更多搜索方式 -->
                <div class='more-search'>
                    <div style='padding:1rem'>
                         <svg-icon iconClass="search"/>
                         <span style='color:#9C9C9C;padding:0 0.5rem;'>更多搜索方式</span>
                    </div>
                    
                    <!-- 搜索店铺 -->
                    <div  class='search-store'>
                          <svg-icon iconClass="store"/>
                          <span>搜索店铺</span>
                    </div>
                     
                 
                </div>

                  <!-- 热门搜索 -->
                <div class='search-hot'>
                    <div style='padding:1rem'>
                         <svg-icon iconClass="search"/>
                         <span style='color:#9C9C9C;padding:0 0.5rem;'>热门搜索</span>
                    </div>
                    
                    <div  class='hot-item'>
                          <span v-for='(item,index) in searchHot' :key='index'>{{item.name}}</span>
                    </div>
                     
                 
                </div>
       </div>
   </div>
</template>

<script>
import {
    Toast
} from 'vant'
import { searchGoods } from '@/api/shop';
export default {
    data(){
        return {
            searchFlag:true,  //搜索标志
            searchConent:'',
            value:'',
            // 热门搜索
            searchHot:[
                {name:'鱼'},
                {name:'牛奶'},
                {name:'鸡蛋'},
                {name:'鸡肉'},
            ]
        }
    },
    props:{
        isShow:Boolean,
    },
    computed:{
        isIcon(){
             return this.$route.name === 'search'
        }
    },
    watch:{
        searchFlag(val){
            if(val === false){
                 this.$nextTick(()=>{
                    const search =  document.querySelector('.search-content .van-field__control')
                     search.focus()
             })
            }
        }
        
    },
    methods:{
        handleClick(){
            this.searchFlag = false
            this.$emit('update:isShow',false)
           
        },
        handleBack(){
            // console.log(this.$route.name)
            if(this.$route.name === 'search'){
                this.$router.push('category')
            }else{
                this.$router.push('/home')
            }
        },
        //一点击就输入框就聚焦
        onClick(){
              const search =  document.querySelector('.search-content .van-field__control')
              search.focus()
        },
        async onSearch(){
            if(!this.searchConent){
                Toast({
                    message: '不能为空~',
                    duration: 800
                })
            }else{
                let searchKey = this.searchConent.toLowerCase()
                this.$router.push({
                    path:'/search',
                    query:{
                    name:this.searchConent
                }})
            }
            
        //    let result =  await searchGoods(this.searchConent)
        //    console.log(result.data.message,'aaa')
        //    if(result.data.status === '1'){
        //        this.$router.push({
        //            path:'/search/'+this.searchConent,
        //            query:{
        //            goodsInfo:result.data.message
        //        }})
        //    }else{  
        //              Toast({
        //             message: '暂无相关商品',
        //             duration: 800
        //         })
        //    } 
        },
        onCancel(){
             this.searchFlag = true
             this.$emit('update:isShow',true)

        }
    }
}
</script>

<style scoped lang='scss'>
#search-main{
    .search-header{
        display: flex;
        align-items: center;
        .back{
            padding-right:1rem;
        }
    }
    background: #fff;
    .van-search--show-action{
        background: #D4237A !important;
    }
    .van-search__action{
        color:#fff;
    }
    .search{
        display: flex;
        justify-content: center;
        background: #D4237A;
        // margin:0.5rem;
           .van-search{
               background:transparent !important;
               padding:0.2rem 0 !important;
           }
           .van-search .van-cell{
               padding:5px 88px 5px 0;
           }
          
    }
    // 更多搜索
    .more-search{
        padding-left: 0.5rem;
           .van-search__content{
               border-radius: 20px;
           }
           .search-store{
               width: 30%;
               color:#58595B;
               background: #F4F4F4;
               border-radius: 30px;
               padding:0.5rem;
               span{
                   padding-left:0.5rem;
               }
           }
    }
    .more-search::before{
        display: block;
        position: absolute;
        top:0;
        left:0;
        width:2rem;
        height:2rem;
        background: #ccc;
    }
    .search-hot{
        padding-left: 0.5rem;
    }
    .hot-item{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    .hot-item span{
               color:#58595B;
               background: #F4F4F4;
               border-radius: 30px;
               padding:0.5rem 0.9rem;
               text-align: center;
    }
 
}

</style>