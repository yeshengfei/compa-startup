/**
 * Created by Moon on 16/6/27.
 */
var HouseCellView = Momfo.ModuleView.extend({
   tplId : 'houseCellTpl',
   initElView : function( ) {
      Momfo.ModuleView.prototype.initElView.apply(this, arguments);
      this.$el.css({
         'display': 'inline-block'
      })
   }
});