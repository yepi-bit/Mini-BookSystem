// pages/article/article.js
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    actions: [{name: '发布动态'},{name: '分享文章'}],
    dataList:''
  },
  refresh(){
    db.collection("demolist").get({
      success:res=>{
        console.log(res)
        this.setData({
          dataList:res.data
        })
      }
    })
  },
  btnSelect(){
    this.setData({
      show:true
    })
  },
  //选择需要发布的
  mySelect()  {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  //取消发布
  onClose() {
    this.setData({ show: false });
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