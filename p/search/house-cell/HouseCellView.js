/**
 * Created by Moon on 16/6/27.
 */
var HouseCellView = Momfo.ModuleView.extend({
   tplId : 'houseCellTpl',
   initElView : function( ) {
      this.dataObj = {
         source : Math.random() > 0.6 ? 1 : 2,
         isChoice : Math.random() > 0.4,
         price : parseInt(Math.random() * 2000 + 1000)
      }
      Momfo.ModuleView.prototype.initElView.apply(this, arguments);
      this.$el.css({
         'display': 'inline-block'
      })
   }
});