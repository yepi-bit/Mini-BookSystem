// pages/publish/publish.js
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginBtnState: true,
    message:'',
    title:"",
    author:'',
    fileList: [],
    dataObj:''
  },
  
  onChange(res){
    this.setData({
      message:res.detail
    })
  },
  onsubmit(res){
    var {title,author,content} = res.detail.value;
    db.collection("demolist").add({
      data:{
        title:title,
        author:author,
        content:content
      }
    }).then(res=>{
      // console.log(res)
    })
    wx.switchTab({
      url: '/pages/article/article',
    })
  },

  // onPublish(res){
  //   if( message != "" || fileList != ""){
  //   db.collection("demolist").add({
  //     success:res=>{
  //       console.log(res)
  //       this.setData({
  //         dataObj:res.data
  //       })
  //     }
  //   })
  // }else {
  //   console.log("失败")
  // }
  // },
  ClickImage(){
    wx.chooseImage({
      success:res=>{
        console.log(res)
      }
    })
  },
  titleInput:function(e) {
    var val = e.detail.value;
    if(val !=''){
      this.setData({
        title:val
      });
      if(this.data.author != ''){
        this.setData({
          loginBtnState:false
        })
      }
    }
    else {
      this.setData({
        loginBtnState: true,
      })
    }
  },
  authorInput:function(e) {
    var val = e.detail.value;
    if(val !=''){
      this.setData({
        author:val
      });
      if(this.data.title != ''){
        this.setData({
          loginBtnState:false
        })
      }
    }   
     else {
      this.setData({
        loginBtnState: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})