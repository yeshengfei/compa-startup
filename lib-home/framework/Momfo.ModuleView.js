/**
 * Created by Moon on 16/6/27.
 */
var Momfo = Momfo || {};
Momfo.ModuleView = Momfo.BaseView.extend({
    tplId : null,
    initialize : function( ) {
        Momfo.BaseView.prototype.initialize.apply(this, arguments);
        this.initElView( );
    },

    initElView : function( ) {
        if(this.tplId) {
            var html = template(this.tplId, this.dataObj);
            this.$el.html(html);
        }
    }

});