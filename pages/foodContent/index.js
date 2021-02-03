let WxParse = require('../../wxParse/wxParse.js')
const config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodData: {},
    host: config.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取上一个页面的传值
    this.requestData(options.id)
  },
  requestData(id) {
    let that = this
    wx.request({
      url: `${config.host}api/productcontent?id=${id}`, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        // 替换反斜杠
        const data = res.data.result[0]
        data.img_url = data.img_url.replace(/\\/g, '/')
        const article = data.content
        WxParse.wxParse('article', 'html', article, that, 5)
        that.setData({
          foodData: data
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