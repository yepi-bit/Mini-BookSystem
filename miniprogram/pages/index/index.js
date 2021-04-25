Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    imgUrls: [
      'http://action.hilib.com:8089/action/presentpic/20210414172844_12711.jpg',
      'http://photos.tuchong.com/25306/f/365323.jpg',
      'http://www.hilib.com/image/2014/5/139936253172921686.jpg',
      'http://www.hilib.com/image/2018/11/154278152698073237.png'
    ],
    duration: 1000,
    currentIndex: 0,
    show:false,
    dataList:[
      {title:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈1",author:"小帅",time:"2021-04-18",imgUrl:'https://icweiliimg1.pstatp.com/weili/bl/57429519551827213.jpg'},
      {title:"哈哈哈哈哈哈2",author:"小帅",time:"2021-04-24",imgUrl:'https://pic4.zhimg.com/v2-6edb86ed0d7a4f5dafa0c78c270ef15f_r.jpg'},
      {title:"哈哈哈哈哈哈3",author:"小帅",time:"2021-04-24",imgUrl:'https://p1.ssl.qhimg.com/t017c890cd5f0022d62.jpg'},
    ],
    datalist:[
      {title:"前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，完美的动效设计，给用户带来极高的用户体验。"},
      {title:"前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等"},
      {title:"Web前端开发工程师，是从事Web前端开发工作的工程师。主要进行网站的开发、优化、完善的工作。网页制作是Web 1.0时代的产物。"}
    ],
    resData:[],
    actions: [
      {name:"泰帅"},
      {name:"真帅"},
      {name:"小帅"}]
  },
  onSearch(res){
    console.log(res.detail) 
   },
  
  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  onTap(){
    this.setData({
      show:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://edu.newsight.cn/wxList.php',
      data:{num:5},
      success:res=>{
        this.setData({
          resData:res.data
        })
      }
    })
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