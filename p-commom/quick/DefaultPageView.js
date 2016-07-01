/**
 * Created by Moon on 16/6/27.
 */
var DefaultPageView = Momfo.PageView.extend({
    headerDef : HeaderView,
    footerDef : FooterView,

    initialize:function( ) {
        Momfo.PageView.prototype.initialize.apply(this, arguments);
    },

    initElView : function( ) {
        this.$contentWrap = this.$el.find('.js-content-wrap');
        this.$contentWrap.css({
            'padding-bottom' : '80px',
            'padding-top' : '60px'
        })
        var HeaderClass = this.headerDef;

        if(HeaderClass) {
            var header = new HeaderClass( );
            this.$el.find('.js-header-wrap').html(header.$el);
        }

        var FooterClass = this.footerDef;
        if(FooterClass) {
            var footer = new FooterClass( );
            this.$el.find('.js-footer-wrap').html(footer.$el);
        }
        // console.log(template('indexPageTpl', {}));
        this.$contentWrap.html(template('indexPageTpl', {}));
        this.$indexPageWrap = this.$contentWrap.find('.js-index-page-wrap');
    }
});