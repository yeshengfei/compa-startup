/**
 * Created by Moon on 16/6/27.
 */
var RightInfoView = Momfo.ModuleView.extend({
   tplId : 'rightInfoTpl',
   initElView : function( ) {
      Momfo.ModuleView.prototype.initElView.apply(this, arguments);
      // this.$el.css({
      //    'display': 'inline-block'
      // })
   }
});