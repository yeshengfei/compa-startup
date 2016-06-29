/**
 * Created by Moon on 16/6/27.
 */
var IndexPageView = DefaultPageView.extend({

   initElView : function( ) {
      DefaultPageView.prototype.initElView.apply(this, arguments);
      // var dataObj =
      //    {
      //       "roomImageList":[
      //          "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192342708_F.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192350950.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192355359.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204309.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204316.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204154.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204210.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204224.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204242.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204253.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204330.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/20151106204847.jpg",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192342708_F.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192350950.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/01/images/v800x600_20160628192355359.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204309.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204316.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204154.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204210.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204224.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204242.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204253.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/v800x600_20151106204330.JPG",
      //          "http://pic.ziroom.com/house_images/SHXH91452158/SHXH91452158_04/images/20151106204847.jpg"
      //       ],
      //       "descriptionList":[
      //          "周边：菜市场： 上海市徐汇区金牛菜市场 便利店：弘恒实业综合商店 上海多年便利店 超 市：罗森(柳州店)医 院：漕河泾地段医院。有农业银行，上海农商银行等网点。",
      //          "交通：地铁：距离上海南站(地铁1号线. 地铁3号线)步行6分钟.公交：上海南站(111、144、 156、 180、 180、 763、 803、 816、 徐闵线)"
      //       ],
      //       "configList":[
      //          "床","衣柜","书桌","Wi-Fi","洗衣机","热水器","空调","微波炉","智能锁"
      //       ],
      //       "detail":{
      //          "name":"\n                金牛苑3居室-01卧\n                 ",
      //          "area":"\n\n[徐汇上海南站]\n3号线上海南站\n                                                                          \n                                                                ￥2560(每月)\n                                        \n分享\n\n\n\n\n                                                \n\n\n\n\n\nZ.O.(自如管家)：赵雨薇  自如承诺","price":"￥2560",
      //          "tags":["地铁10分钟","风格3.0 布丁"],
      //          "detail":[
      //             "面积： 12.8㎡",
      //             "朝向： 南",
      //             "户型： 3室1厅\n                                                      合\n                                                  ",
      //             "楼层： 04/0层","交通： \n                        \n            \t\t \n                            \n                                                                                             距3号线上海南站304米 \n                                                       \n                                                                                           \n                                        距1号线上海南站304米\n                                                       \n                                                                                                   距3号线石龙路1119米\n                                                       \n                                                                                                   距1号线漕宝路1784米\n                                        \n                                                       \n                                                    \n                         \n            \t"
      //          ]
      //       }
      //    };
      // var dataObj = {"roomImageList":["http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204645508_F.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204659227.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204709717.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20151231212313109.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204720303.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212415668.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212400942.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212405929.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212421461.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212429925.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/20151231212506277.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204645508_F.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204659227.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204709717.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20151231212313109.jpg","http://pic.ziroom.com/house_images/SHZR59583709/02/images/v800x600_20160621204720303.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212415668.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212400942.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212405929.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212421461.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/v800x600_20151231212429925.jpg","http://pic.ziroom.com/house_images/SHZR59583709/SHZR59583709_04/images/20151231212506277.jpg"],"descriptionList":["周边：小区距离华宁路地铁站仅有10分钟步行距离，紧邻离碧江广场购物中心商圈丰富，菜市场，购物中心，电影院应有尽有！","交通：地铁站：五号线华宁路地铁站步行十分钟内。公交： 闵红线、闵马线、闵莘线、莘荷线、闵东线、江川四路、江川二路，可达北桥，莘庄，吴泾等商圈。"],"configList":["床","衣柜","书桌","Wi-Fi","洗衣机","热水器","空调","微波炉","智能锁"],"detail":{"name":"\n                富仕名邸3居室-02卧\n                 ","area":"\n\n[闵行老闵行]\n5号线华宁路\n                                                                          \n                                                                ￥1490(每月)\n                                        \n分享\n\n\n\n\n                                                \n\n\n\n\n\nZ.O.(自如管家)：徐辉  自如承诺","price":"￥1490","tags":["地铁10分钟","独立阳台","风格3.0 木棉"],"detail":["面积： 18.2㎡","朝向： 南","户型： 3室1厅\n                                                      合\n                                                  ","楼层： 03/4层","交通： \n                        \n            \t\t \n                            \n                                                                                             距5号线华宁路698米 \n                                                       \n                                                                                           \n                                        距5号线金平路833米\n                                                       \n                                                                                                   距5号线东川路2004米\n                                        \n                                                       \n                                                    \n                         \n            \t"]}};
      var dataObj = {"roomImageList":["http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124225682_F.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124241020.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124250043.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124304571.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190737.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190720.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190725.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190744.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190750.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/20151022185408.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124225682_F.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124241020.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124250043.jpg","http://pic.ziroom.com/house_images/SHMH33023437/03/images/v800x600_20160402124304571.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190737.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190720.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190725.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190744.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/v800x600_20151022190750.jpg","http://pic.ziroom.com/house_images/SHMH33023437/SHMH33023437_04/images/20151022185408.jpg"],"descriptionList":["周边：中小学： 闵行中学、江川小学、闵行区鹤北小学、闵行区碧江路小学、闵行四中、闵行五中，闵行福山实验小学 大学：电视大学闵行二分校、上海交通大学、东海学院、华东师范大学商场： 欧尚置业广场、千代休闲广场、金平路步行街、永乐家电、金海马家居 优宜家超市医院：市五医院、复旦肿瘤医院等 道培医院 沪闵医院 邮局：中国邮政江川路邮政所(闵行区局)、兰坪路邮局、碧江路邮局银行：中国建设银行、中国工商银行","交通：公交：沪闵路、徐闵线、816路，闵行16路，闵行6路 地铁：5号线金平路站"],"configList":["床","衣柜","书桌","Wi-Fi","洗衣机","热水器","空调","微波炉","智能锁"],"detail":{"name":"\n                丽都城假日景苑3居室-03卧\n                 ","area":"\n\n[闵行老闵行]\n5号线金平路\n                                                                          \n                                                                ￥1760(每月)\n                                        \n分享\n\n\n\n\n                                                \n\n\n\n\n\nZ.O.(自如管家)：徐辉  自如承诺","price":"￥1760","tags":["地铁10分钟","独立阳台","风格3.0 木棉"],"detail":["面积： 15.9㎡","朝向： 南","户型： 3室1厅\n                                                      合\n                                                  ","楼层： 02/11层","交通： \n                        \n            \t\t \n                            \n                                                                                             距5号线金平路240米 \n                                                       \n                                                                                           \n                                        距5号线东川路1048米\n                                                       \n                                                                                                   距5号线剑川路1580米\n                                        \n                                                       \n                                                    \n                         \n            \t"]}}

      this.$contentWrap.html(template('indexPageTpl', dataObj));


      //右侧列表
      new RightInfoView({
         el : this.$contentWrap.find('.js-right-info-wrap'),
         dataObj : dataObj
      });


      //推荐房源卡片
      for(var i = 0; i < 4; i++) {
         var cardCell = new HouseCellView( );
         this.$el.find('.recommand-house-wrap').append(cardCell.$el);
         cardCell.$el.find('.house-cell-wrap').css({
            'margin-left' : 0,
            'margin-top' : 0,
            'margin-right' : '20px',
            'margin-bottom' : '20px'
         })
      }
      this.$el.find('.recommand-house-wrap').css({
         'transform':'scale(0.817)',
         'transform-origin': '0 0'
      })


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
         // that.$contentWrap.find('.js-right-info-wrap').scrollToFixed({
         //    'marginTop': 60
         // });
         console.log($('.js-right-info-wrap'));
         $('.js-right-info-wrap').scrollToFixed({
            'marginTop': 60
         });
      }, 100)
   }
});