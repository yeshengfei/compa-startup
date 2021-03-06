/**
 * Created by Moon on 16/6/27.
 */
var IndexPageView = DefaultPageView.extend({
   footerDef: null,

   initialize : function( ) {
      Momfo.PageView.prototype.initialize.apply(this, arguments);
   },

   initElView : function( ) {
      DefaultPageView.prototype.initElView.apply(this, arguments);

      var houseFilter = new HouseFilterView( );
      this.$indexPageWrap.append(houseFilter.$el);

      for(var i = 0; i < 18; i++){
         var cellView = new HouseCellView( );
         this.$indexPageWrap.append(cellView.$el);
      }

      this.$indexPageWrap.css({
         'text-align' : 'center'
      });
      this.$contentWrap.css({
         'background-color' : '#eeeeee'
      })
   }
   
});