/**
 * Created by Moon on 16/6/27.
 */
var IndexPageView = DefaultPageView.extend({

   initElView : function( ) {
      DefaultPageView.prototype.initElView.apply(this, arguments);
      var dataObj =
         {
            "roomImageList":[
               "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192342708_F.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192350950.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192355359.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204309.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204316.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204154.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204210.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204224.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204242.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204253.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204330.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/20151106204847.jpg",
               "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192342708_F.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192350950.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192355359.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204309.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204316.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204154.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204210.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204224.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204242.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204253.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204330.JPG",
               "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/20151106204847.jpg"
            ],
            "descriptionList":[
               "周边：菜市场： 上海市徐汇区金牛菜市场 便利店：弘恒实业综合商店 上海多年便利店 超 市：罗森(柳州店)医 院：漕河泾地段医院。有农业银行，上海农商银行等网点。",
               "交通：地铁：距离上海南站(地铁1号线. 地铁3号线)步行6分钟.公交：上海南站(111、144、 156、 180、 180、 763、 803、 816、 徐闵线)"
            ],
            "configList":[
               "床","衣柜","书桌","Wi-Fi","洗衣机","热水器","空调","微波炉","智能锁"
            ],
            "detail":{
               "name":"\n                金牛苑3居室-01卧\n                 ",
               "area":"\n\n[徐汇上海南站]\n3号线上海南站\n                                                                          \n                                                                ￥2560(每月)\n                                        \n分享\n\n\n\n\n                                                \n\n\n\n\n\nZ.O.(自如管家)：赵雨薇  自如承诺","price":"￥2560",
               "tags":["地铁10分钟","风格3.0 布丁"],
               "detail":[
                  "面积： 12.8㎡",
                  "朝向： 南",
                  "户型： 3室1厅\n                                                      合\n                                                  ",
                  "楼层： 04/0层","交通： \n                        \n            \t\t \n                            \n                                                                                             距3号线上海南站304米 \n                                                       \n                                                                                           \n                                        距1号线上海南站304米\n                                                       \n                                                                                                   距3号线石龙路1119米\n                                                       \n                                                                                                   距1号线漕宝路1784米\n                                        \n                                                       \n                                                    \n                         \n            \t"
               ]
            }
         };

      this.$contentWrap.html(template('indexPageTpl', dataObj));



      var that = this;
      setTimeout(function () {

         var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
         });
      }, 100)
   }
});