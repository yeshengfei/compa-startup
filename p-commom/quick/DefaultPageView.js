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
        if(this.headerDef) {
            var header = new HeaderView( );
            this.$el.find('.js-header-wrap').html(header.$el);
        }
        if(this.footerDef) {
            var footer = new FooterView( );
            this.$el.find('.js-footer-wrap').html(footer.$el);
        }
    }
});