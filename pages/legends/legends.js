//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    legends: [
      {
        "id":1,
        "title":"潮汐海灵",
        "name":"菲兹",
        "tags":["刺客"],
        "icon":"http://ossweb-img.qq.com/images/lol/img/champion2/105_Web_0.jpg"
      },
      {
        "id":1,
        "title":"潮汐海灵",
        "name":"菲兹",
        "tags":["刺客"],
        "icon":"http://ossweb-img.qq.com/images/lol/img/champion2/105_Web_0.jpg"
      },
      {
        "id":1,
        "title":"潮汐海灵",
        "name":"菲兹",
        "tags":["刺客"],
        "icon":"http://ossweb-img.qq.com/images/lol/img/champion2/105_Web_0.jpg"
      },
      {
        "id":1,
        "title":"潮汐海灵",
        "name":"菲兹",
        "tags":["刺客"],
        "icon":"http://ossweb-img.qq.com/images/lol/img/champion2/105_Web_0.jpg"
      }
    ],
  },
  onLoad: function () {
    // 加载时更新数据域
    this.getFreeLegendData()
  }
})
