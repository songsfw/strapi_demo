'use strict';
/**
 * user-info controller
 */
let axios = require("axios")
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-info.user-info',({strapi})=>({
    async find(ctx){
        // let query = ctx.query
        // console.log(query);
        // const {data} = await axios.get('https://api.weixin.qq.com/sns/jscode2session');
        // //ctx.body = data;
        // // Use strapi.entityService to create a new data entry in Strapi
        // if(data.openid){
        //     await strapi.entityService.create("api::user-info.user-info", {
        //         data: data,
        //     });
        // }
        // return data

        //新用户登录
        // const entry = await strapi.db.query('plugin::users-permissions.user').create({
        //     data:{
        //         "username": "asdasd",
        //         "email": "o0gr_5R5UreQJwIdkoP1umpmUagc@song.io",
        //         "password": "12345678"
        //     }

        //   });
        //改变用户权限
        // const entry = await strapi.db.query('plugin::users-permissions.user').update({
        //     where:{id:6},
        //     data:{
        //         "role": 2
        //     }
        // });
        return entry

        // axios.post('http://localhost:1337/api/auth/local/register',{
        //     "username": "asd",
        //     "email": "asd@song.io",
        //     "password": "12345678"
        //   }).then(response => {
        //     // Handle success.
        //     console.log('Well done!');
        //     console.log('User profile', response.data.user);
        //     console.log('User token', response.data.jwt);
        //     return response;
        //   })
        //   .catch(error => {
        //     // Handle error.
        //     console.log('An error occurred:', error.response);
        //     return error.response;
            
        //   });
        // const obj = await super.find(ctx);
        // // some more logic
        // console.log(obj);
        
    }
}))
