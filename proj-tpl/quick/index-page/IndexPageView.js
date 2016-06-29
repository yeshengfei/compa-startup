/**
 * Created by Moon on 16/6/27.
 */
var IndexPageView = DefaultPageView.extend({
   initialize : function( ) {
      Momfo.PageView.prototype.initialize.apply(this, arguments);
   },

   initElView : function( ) {
      DefaultPageView.prototype.initElView.apply(this, arguments);
      var moduleView = new PageModuleView( );
      this.$contentWrap.html(moduleView.$el);
   }
});