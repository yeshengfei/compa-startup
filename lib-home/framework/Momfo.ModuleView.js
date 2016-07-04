/**
 * Created by Moon on 16/6/27.
 */
var Momfo = Momfo || {};
Momfo.ModuleView = Momfo.BaseView.extend({
    tplId : null,
    initialize : function(initObj) {
        if(initObj){
            this.dataObj = initObj.dataObj;
        }
        Momfo.BaseView.prototype.initialize.apply(this, arguments);
        this.initElView( );
    },

    initElView : function( ) {
        if(this.tplId) {
            var html = template(this.tplId, this.dataObj);
            this.$el.html(html);
            this.bindLazyLoad( );
        }
    },

    /**
     * 注1：此方法依赖于jquery作为selector，依赖lazyload插件
     * 注2：TODO:可以尝试在需要时动态注入这类插件
     *
     * @param selector : id或class的标示  "#idName", ".className", 用于优化搜索dom的最外层容器
     */
    bindLazyLoad:function(selector, options) {
        var that = this;
        //有jquery，并且也有lazyload插件，则激活lazyload的插件功能
        if($ && $.fn.lazyload){
            if(!selector){
                selector = "";
            }
            //缩小selector的作用范围
            this.$el.find(selector + " img.lazy").each(function(){
                //加入一个判断，避免重复绑定
                if($(this).attr("src") == undefined){
                    var lazyloadConfig = {
                        threshold :1500,
                        data_attribute:'src'
                    };
                    // if(that.LAZY_LOAD_EFFECT){
                    //     lazyloadConfig.effect = that.LAZY_LOAD_EFFECT;
                    // }
                    // if(that.LAZY_LOAD_PLACE_HOLDER){
                    //     lazyloadConfig.placeholder = that.LAZY_LOAD_PLACE_HOLDER;
                    // }
                    console.log($(this));
                    $(this).lazyload(lazyloadConfig);
                }
            });
        }

    },

});