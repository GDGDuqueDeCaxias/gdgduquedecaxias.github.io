/*var controllerMeetup =  require('./controller-meetup.js');
var services =  require('./services.js');*/

angular.module('gdgsite', ['gdgsite.controllers', 'gdgsite.services']);

(function (){
  if ('serviceWorker' in navigator) {
     navigator.serviceWorker
              .register('./../sw.js')
              .then(function() { console.log('ServiceWorker Registrado')});
   }
}());
