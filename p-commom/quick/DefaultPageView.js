/**
 * Created by Moon on 16/6/27.
 */
var DefaultPageView = Momfo.PageView.extend({
    initialize:function( ) {
        Momfo.PageView.prototype.initialize.apply(this, arguments);
    },

    initElView : function( ) {
        this.$contentWrap = this.$el.find('.js-content-wrap');
        this.$contentWrap.css({
            'margin-top' : '60px',
            'margin-bottom' : '80px'
        })
        var header = new HeaderView( );
        this.$el.find('.js-header-wrap').html(header.$el);
        var footer = new FooterView( );
        this.$el.find('.js-footer-wrap').html(footer.$el);
    }
});