/**
 * Created by Moon on 16/6/27.
 */
var HouseFilterView = Momfo.ModuleView.extend({
   tplId : 'houseFilterTpl',
   events : {
      'click .js-selection-wrap span' : 'onRuleElemSelect'
   },

   onRuleElemSelect : function(event) {
      console.log($(event.currentTarget),$(event.currentTarget).parent());
      $(event.currentTarget).parent().find('span').removeClass('active');
      $(event.currentTarget).addClass('active');
   }
});