// 云函数入口文件
const cloud = require('wx-server-sdk')
const {
  WXMINIUser,
  WXMINIQR
} = require('wx-js-utils');
const appId = 'wx26a5a0f7e88cc205';
const secret = '13fcc5917012d47afa2d24b65c64be17';

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  let wXMINIUser = new WXMINIUser({
    appId,
    secret
  });
  let access_token = await wXMINIUser.getAccessToken();
  let wXMINIQR = new WXMINIQR();
  let qrResult = await wXMINIQR.getQR({
    access_token,
    path:'/pages/qrCode/qrCode'
  });
  return await cloud.uploadFile({
    cloudPath:'normalQr.png',
    fileContent:qrResult
  })


  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}