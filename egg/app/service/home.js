/*
 * @Author: freeze.xue 
 * @Date: 2020-10-27 13:31:14 
 * @Last Modified by:   freeze.xue 
 * @Last Modified time: 2020-10-27 13:31:14 相对简单 只是查询一下吐出来就ok
 */

"use strict"
const Service = require('egg').Service
class HomeService extends Service {
    //轮播图
    async getHomeCarousel(){
        let sqlStr = 'SELECT * FROM home_carousel'
        let result = await this.app.mysql.query(sqlStr)
        return {
            code: 200,
            data: result
        }
    }
    //首页导航
    // async getHomeNav() {
    //     const { ctx } = this;
    //     const result = require('../data/homenav.json')
    //         // let sqlStr = 'SELECT * FROM home_carousel'
    //         // let result = await ctx.service.tools.query(sqlStr)
    //     return  {
    //         code: 200,
    //         data: result
    //     }
    // }
   //首页导航栏商品
   async getHomeNav() {
    const result = require('../data/homenav.json')
        // let sqlStr = 'SELECT * FROM home_carousel'
        // let result = await ctx.service.tools.query(sqlStr)
    return  {
        code: 200,
        data: result
    }
}           

}

module.exports = HomeService