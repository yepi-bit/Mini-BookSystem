// pages/article/article.js
const db = wx.cloud.database();
const todos = db.collection("demolist");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    actions: [{name: '发布动态'},{name: '分享资源'}],
    dataList:[],
  },
  //闪烁飞机
  btnSelect(){
    this.setData({
      show:true
    })
  },
  //选择需要发布的
  mySelect()  {
    this.setData({
      show:false
    })
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
    this.getData(res =>{});
  },
  onPullDownRefresh:function(){
    this.getData(res => {
      wx.stopPullDownRefresh();
    });
  },
  getData:function(callback){
    if(!callback){
      callback = res =>{}
    }
    wx.showLoading({
      title: '加载中...',
    })
    todos.get().then(res => {
      this.setData({
        dataList:res.data
      },res =>{
        wx.hideLoading();
        callback();
      })
    })
   },
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.getData()
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})