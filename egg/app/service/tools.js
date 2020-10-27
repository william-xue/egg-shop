/*
 * @Author: freeze.xue 
 * @Date: 2020-10-27 14:17:56 
 * @Last Modified by:   freeze.xue 
 * @Last Modified time: 2020-10-27 14:17:56 
 */

'use strict';
const { Service } = require('egg');
const svgCaptcha = require('svg-captcha');
class ToolsService extends Service {
    //数据库操作
    async query(sql, value) {
        return await this.app.mysql.query(sql, value)
    }
      //  产生验证码
    async captcha() {
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 52,
            width: 100,
            height: 42,
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            background: '#6CA0B5',
        });
        this.ctx.session.code = captcha.text.toLocaleLowerCase();
        return captcha;
    }


}
module.exports = ToolsService