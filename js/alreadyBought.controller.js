(function(){
  'use strict';
  angular
    .module('shoppingList')
    .controller('AlreadyBoughtController', AlreadyBoughtController);

    AlreadyBoughtController.$inject = ['ShoppingListService', '$scope']

    function AlreadyBoughtController(ShoppingListService, $scope) {
      var alreadyBought = this;
      alreadyBought.hello = "AlreadyBoughtController";
      alreadyBought.bougthItems = ShoppingListService.getBoughtItems();
      alreadyBought.numOfBoughtItems;
      alreadyBought.showMessage = alreadyBought.numOfBoughtItems === 0 ? true : false;
      alreadyBought.items = ShoppingListService.getItems();

      $scope.$watch(function() {
        return ShoppingListService.getNumOfBoughtItems();
      }, function(current, previous) {
        return alreadyBought.numOfBoughtItems = current;
      });
    }
})();