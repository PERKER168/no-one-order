const config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    host: config.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
  },

  goFoodContent(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../foodContent/index?id=${id}`,
    })
  },
  requestData() {
    let that = this
    wx.request({
      url: `${config.host}api/productlist`, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        // 替换反斜杠
        const dataList = res.data.result
        for(let i = 0; i < dataList.length; i++) {
          for(let j = 0; j < dataList[i].list.length; j++) {
            dataList[i].list[j].img_url = dataList[i].list[j].img_url.replace(/\\/g, '/')
          }
        }
        that.setData({
          list: dataList
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