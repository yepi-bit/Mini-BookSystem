// pages/publish/publish.js
const db = wx.cloud.database();
const todos = db.collection("demolist");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginBtnState: true,
    message:'',
    title:"",
    author:'',
    dataObj:'',
    imgUrl:''
  },
  
  onChange(res){
    this.setData({
      message:res.detail
    })
  },
  onsubmit:function(event){
    todos.add({
      data:{
        title:event.detail.value.title,
        author:event.detail.value.author,
        content:event.detail.value.content,
        imgUrl:this.data.imgUrl
      }
    }).then(res=>{
      wx.showToast({
        title: '成功',
        icon:'success'
      })
    })
    wx.switchTab({
      url: '/pages/article/article',
    })
  },
  selectImage:function(e){
    wx.chooseImage({
      success:res =>{
        wx.cloud.uploadFile({
          cloudPath:"${Math.floor(Math.random()*10000000)}.png",
          filePath:res.tempFilePaths[0]
        }).then(res => {
          this.setData({
            imgUrl:res.fileID
          })
        }).catch(err =>{
          console.log(err)
        })
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