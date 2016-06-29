/**
 * Created by Moon on 16/6/27.
 */
var IndexPageView = DefaultPageView.extend({
    initialize : function( ) {
        Momfo.PageView.prototype.initialize.apply(this, arguments);
    },
    
    initElView : function( ) {
        DefaultPageView.prototype.initElView.apply(this, arguments);

        var houseFilter = new HouseFilterView( );
        this.$contentWrap.append(houseFilter.$el);

        for(var i = 0; i < 18; i++){
            var cellView = new HouseCellView( );
            this.$contentWrap.append(cellView.$el);
        }

        this.$contentWrap.css({
            'text-align' : 'center'
        });
        this.$contentWrap.css({
            'background-color' : '#eeeeee'
        })

        console.log('ajax');
        $.ajax({
            url: "http://zra.web.ziroom.com/projectserach/showProject?key_word=" + '' + "&districtName=" + '' + "&district_name=" + '' + "&subway_name=" + '' + "&subway_station=" + '' + "&city_code=" + '' + "&type=" + '' + "&source=6&callback=?",
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: function(k) {
                var j, l = k.data, i = 100;
                if ("" != l) {
                    switch (l) {
                        case"欢乐谷7号工场自如寓":
                            i = 0;
                            break;
                        case"西直门梧桐自如寓":
                            i = 1;
                            break;
                        case"酒仙桥将府公园自如寓":
                            i = 2;
                            break;
                        case"望京阳光自如寓":
                            i = 3;
                            break;
                        case"亚运村15自如寓":
                            i = 4;
                            break;
                        case"上地凌云自如寓":
                            i = 5;
                            break;
                        case"上海七宝星空自如寓":
                            i = 6
                    }
                    // j = '<li  class="clearfix zry"><div class="img"><a target="_blank" href="' + d[i].h + '"><img src="' + d[i].img + '"  width="288" height="180" alt="' + d[i].name + '"/></a></div><div class="txt"><h3><a target="_blank" href="' + d[i].h + '" class="t1">' + d[i].name + "<b></b></a></h3><h4>" + d[i].tel + '</h4><div class="detail"><p>' + d[i].detail + "</p><p>" + d[i].details + '</p></div></div><!--/txt--><div class="priceDetail"><p class="price">' + d[i].price + '<span class="gray-6">(每月)</span></p><p class="more"><a href="' + d[i].h + '" target="_blank">立即看房</a></p></div><!--/priceDetail--></li>',
                    //     jQuery("#houseList").prepend(j)
                    console.log(d[i]);
                }
            }
        })
    }
});