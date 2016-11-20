//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: "Welcome to the Summoner’s Rift",
    icon: "http://ossweb-img.qq.com/images/lol/img/champion/Ashe.png",
    nickname: "旅梦开发团",
    level:"20"
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../legends/legends'
  //   })
  // },
  bindFreeLegendTap: function () {
    wx.navigateTo({
      url: '../legends/legends'
    })
  },
  bindBattleListTap: function () {
    wx.navigateTo({
      url: '../battles/battles'
    })
  },
  onLoad: function () {
    // 加载时更新数据域
    // console.log(app.getAccessToken())
  
    // this.getUserHotData()
  }
})
