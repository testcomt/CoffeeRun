// Using IIFE to register modules in a namespace
(function(window){
  'use strict';
  // 1. get a ref to the namespace, if it exists.
  var App = window.App||{};

  //2. create the module code
  function DataStore() {
    console.log('running the DataStore function');
  }
  //3. attach module code to the namespace
  App.DataStore = DataStore;
  window.App=App;
})(window);
